import React, {useState} from 'react';
import useFetchHook from './hooks/useFetchHook'; // IMPORT FETCH HOOK

import './TripList.css';



function TripList() {

    const URL_ALL = 'http://localhost:3000/trips'
    const URL_EUR = 'http://localhost:3000/trips?loc=europe'
    const[url, setURL] = useState(URL_ALL);
   
    // Destructure the data obj to extract the trips data
    const {data: trips, isLoading, error} = useFetchHook(url);

    console.log('isLoading', isLoading);
    console.log(trips);

    return (
        <div className='trip-list'>
            <h2>
                TripList
            </h2>
                {isLoading && <div>Loading ....</div>}
                {error && <div>{error}</div>}
            <div>
                <ul>
                    {trips && trips.map( (t, index) => 
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
