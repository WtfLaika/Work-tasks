import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER, SHOW_ALERT, HIDE_ALERT, REQUST_POSTS } from './types';
import { ReactDOM } from 'react-dom';

export function createPost(post) {

    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {

    return {
        type: SHOW_LOADER,
    }
}
export function hideLoader() {

    return {
        type: HIDE_LOADER,
    }
}

export function showAlert(text) {

    return dispatch => {
        dispatch({type: SHOW_ALERT, payload:text})
        
        setTimeout( ()=> dispatch(hideAlert()),3000)
    }
}
export function hideAlert() {

    return {
        type: HIDE_ALERT,
    }
}
export function fetchPosts() {
    return {
        type: REQUST_POSTS
    }
    // return async dispatch => {
    //     try{dispatch(showLoader())
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts?_limit=5');
    //         const json = await response.json()
    //         dispatch({ type: FETCH_POSTS, payload: json })
    //         setTimeout(() => {
    //         dispatch(hideLoader())
    //     },3000)} catch (e) {
    //         dispatch(showAlert('Что-то пошло не так'))
    //     }

        
    // }
}