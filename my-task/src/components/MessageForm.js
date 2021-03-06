import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import messegerLogo from '../img/Vector.svg'
import { createMessage } from '../redux/actions'
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

 const MessageForm = () => {

    const [state, setState] = useState({ title: '' })

    const dispatch = useDispatch();


    function submitHandler(e) {
        e.preventDefault()
        const title = state.title

        if (!title.trim()) {
            return
        }

        let date = new Date()
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if (hours < 10) {
            hours = `0${hours}`
        }
        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        const newPost = {
            title, time: `${hours}:${minutes}`, id: Date.now().toString()
        }
        dispatch(createMessage(newPost))
        setState({ title: '' })
    }

    function changeHandler(e) {
        e.persist()
        setState(prev => ({
            ...prev, ...{
                [e.target.name]: e.target.value
            }
        }))
    }
    return (
        <form className='message-form' onSubmit={submitHandler}>
            <input type='text' className='message-area' name='title' value={state.title} onChange={changeHandler} />
            <button type='submit' className='send'><img src={messegerLogo} alt='send' /></button>
        </form>
    )
}



export default MessageForm

MessageForm.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    state: PropTypes.object,
    submitHandler: PropTypes.func,
    changeHandler: PropTypes.func,
    hours: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

}