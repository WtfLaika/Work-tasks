import React from 'react'
import { connect } from 'react-redux';
import { deleteMessage } from '../redux/actions';
import { PropTypes } from 'prop-types';

export const  Message = ({message,deleteMessage}) => {
    
    return (
        <div className='message-container'  onClick={ e => {
            deleteMessage(message.id)}} >
            <div className="message">{message.title}</div>
            <div className='message-time'>{message.time}</div>
            
        </div>
    )
}

const mapDispatchToProps = {
    deleteMessage
}



export default connect(null,mapDispatchToProps)(Message)

Message.propTypes = {
    message: PropTypes.shape({
        id:PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
        title:PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]).isRequired,
        time:PropTypes.string.isRequired
    })
}