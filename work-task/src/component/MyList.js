import React from 'react'
import ListItem from './ListItem'
export default function MyList({result}) {
    return (
        <div className={'my-list'} >
           {result.map( (item,index)=>{
               <ListItem result={item}/>
           })}
        </div>
    )
}
