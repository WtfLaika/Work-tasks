import React from 'react'
import {  useSelector } from 'react-redux';
import Message from './Message';

 const  Messages = () => {
    let myMessages =useSelector(state => state.messages.messages)
    if(!myMessages.length) { <div className='message'>No messages</div>}
    return ( myMessages.map( (message,index)=> <Message message={message} key={`1-${index}`}/>))
}

export default Messages


