import React from 'react'
import {useLocation} from 'react-router-dom'

function Reports() {

    const queryString = useLocation().search // =?name=Stewart
    const queryParams = new URLSearchParams(queryString) // parses into key and value
    const name = queryParams.get('name') // get value from key


    return (
        <div className='reports'>
            <h1>Reports</h1> 
            <h2>The Report for {name}</h2>
        </div>
    )
}

export default Reports;