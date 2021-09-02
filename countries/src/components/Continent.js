import React from 'react'
import Countrie from './Countrie';

export default function Continent({ countinent }) {
    return (
        <>
        <div className='countries-container'>
            <button className='countinents'>
                {countinent.name}
            </button>
                <div className='countinent-line'></div>
                {countinent.countries.map( countrie => <Countrie countrie={countrie}/>)}
        </div>
        </>
    )
}
