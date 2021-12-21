import {useState, useEffect, useRef} from 'react'

// hooks allow you to preserve your own state across render cycles
const useFetchHook = (url, _configObj) => {

    const [data, setData] = useState(null); // Fetched API data
    const [isLoading, setLoading] = useState(false); // Boolean to indicate when loading
    const [error, setError] = useState(null); // Error state variable

    const config = useRef(_configObj); // As _configObj is a referential type
                                       // it needs to be wrapped in a useRef
                                       // Otherwise we have an infinite loop with the dependencies 

    useEffect(()=>{
        // Instantiate a controller to abort a fetch if user has clicked elsewhere
        //(Or it can be used as a TimeOut if the fetch takes too long. If so wrap within
        // a setTimeout)
        // The AC obj has a property, 'signal', that binds to a fetch process
        // and an abort() function that cancels the fetch() 
        const controller = new AbortController();
        config.current = {...config.current, signal: controller.signal}; // Add controller to the config obj
        
            const fetchData = async () => {
                try{
                    setLoading(true);
                    const res = await fetch(url); // 'url' is a hook argument 
                    // defence check if res status is ok and not an error (as u will res even if there is an error)
                    if(!res.ok){
                        throw new Error(res.statusText) // returns res status code
                    }

                    const data = await res.json();
                    setData(data)
                    setLoading(false)
                } catch(err){
                    setLoading(false);
                    setError(`Could Not Fetch The Data due to ${err.message}`);     
                }
            }
            fetchData();

            // The useEffect f() argument is ended with a clear-up function to
            // to abort any outstanding fetches
            return () => {
                controller.abort() 
            }
    },[url, config]); // end of useEffect

 return {data, isLoading, error} // return state variables from hook
    
}

export default useFetchHook
