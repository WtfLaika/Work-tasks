import React from 'react'
import { connect } from 'react-redux';
import Message from './Message';

export const  Messages = ({messages}) => {
    if(!messages.length) { <div className='message'>No messages</div>}
    return ( messages.map( (message,index)=> <Message message={message} key={`1-${index}`}/>))
}


const mapStateToProps = state => {
    return {
        messages:state.messages.messages
    }
}

export default connect(mapStateToProps,null)(Messages)