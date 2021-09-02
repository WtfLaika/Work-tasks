import React from 'react'
import Language from './Language'

export default function Countrie({ countrie }) {
    return (
        <div className='countrie-container'>
            
            <button className='countrie'>
                {countrie.name}
            </button>
            {Array.isArray(countrie.language) && countrie.language.map(language => <Language language={language} />)}
            {!Array.isArray(countrie.language) && <Language language={countrie.language} />}
        </div>
    )
}
