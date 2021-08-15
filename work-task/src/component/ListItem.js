import React from 'react'

export default function ListItem({result}) {
    return (
        <div className='list-item' style={{backgroundColor:result.color}}>
            {result.str}
        </div>
    )
}
