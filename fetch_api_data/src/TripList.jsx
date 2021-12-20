import React, {useState, useEffect , useCallback} from 'react';
import './TripList.css';


function TripList() {

    const URL_ALL = 'http://localhost:3000/trips'
    const URL_EUR = 'http://localhost:3000/trips?loc=europe'
    const[url, setURL] = useState(URL_ALL);
    const [trips, setTrips] = useState([]);
    
    // METHOD 1
    // ========
    // If the URL is fixed, then the f() has no reference-type variables and you can place the function and execute it  
    const fetchDataFixed = async () => {
        const res = await fetch(URL_ALL);
        const data = await res.json();
        setTrips(data);  
        console.log('Method 1')
    };
    useEffect( () => {
        fetchDataFixed();
    }, []);  // [] zero dependencies, which means that it runs just once on initial render

    // METHOD 2 - FAILS
    // ========
    const fetchDataVariable2 = async () => {
        const res = await fetch(url);
        const data = await res.json();  
        setTrips(data);
        console.log('Method 2');
    }
    
    // url is now a dependancy as the fetch needs to be re-run whenever there is a new URL
    // Howevever, fetchDataVariable is also dependency. The reason for this is that 
    // everytime the component is rendered, all its 'reference' types (f(), objects, arrays, 
    // non-useState variables are recast and referenced in another part of memory. React views
    // this as a referential change and therefore deems to be required as a DEPENDENCY in 
    // the useEffect. However, but doing this creates an INFINITE LOOP ) 
 
    useEffect(()=>{
        // fetchDataVariable2()
    },[url]);
    
    // METHOD 3 - Using Inner functions within UseEffect
    // ========
    // One way to avoid this infinite-loop is to put the f() within the scope of the useEffect. 
    // As such there is no external re-casting and re-referencing.
    // Note that the useEffect cannot contain an ASYNC f() as one of its arguments. But the 
    // argument f() can contain an aync function within it.
    useEffect(() => {
        const fetchDataVariable3 = async () => {
             const res = await fetch(url);
             const data = await res.json();
             setTrips(data);   
        console.log('Method 3');
        }
        fetchDataVariable3();
    },[url])


    // METHOD 4 - Alt solution with useCallbacks() as a wrapper
    // ========
    // Another alternative is to place the fetch function within a wrapped useCallback() 
    // The f() will only now only recast if the url state variable is changed. 
    const fetchDataVariable4 = useCallback( 
        async () => {
            const res = await fetch(url);
            const data = await res.json();
            setTrips(data);
            console.log('Method 4');
        }
    ,[url])
    
    // The useEffect will now only change once the fetch fn() is updated
    useEffect(()=> {
        fetchDataVariable4()
    },[fetchDataVariable4])
    


console.log(trips);

    return (
        <div className='trip-list'>
            <h2>
                TripList
            </h2>
                <div>
                    <ul>
                        {trips.map( (t, index) => 
                            <li key={index}>
                                <h3>{t.title}</h3> 
                                <p>{t.price}</p>
                            </li>
                            )
                        }
                    </ul>
                </div>
                <div>
                    <button onClick={()=>{setURL(URL_ALL)}}>ALL TRIPS</button>
                    <button onClick={()=>{setURL(URL_EUR)}}>EUROPE TRIPS</button>
                </div>
        </div>
    )
}

export default TripList
