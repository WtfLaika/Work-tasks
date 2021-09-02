import React from 'react'
import * as data from './nested';
import Continent from './Continent'


export default function ContinentForm() {
    let secData = JSON.stringify(data)
    let myData = JSON.parse(secData)
    const continents = myData.default.countinents
 
    return (
        <div className="container">
            {continents.map(continent => <Continent countinent={continent}/>)}
           
            
        </div>
    )
}
