import { put,call, takeEvery } from "@redux-saga/core/effects"
import { hideLoader, showAlert, showLoader } from "./actions";
import { FETCH_POSTS, REQUST_POSTS } from './types';


export function* sagaWatcher() {
    yield takeEvery(REQUST_POSTS, sagaWorker)
}

function* sagaWorker() {
    try
    {yield put(showLoader())
    const payload = yield call(fetchPosts)
    yield put({type:FETCH_POSTS,payload})
    yield put(hideLoader())}
    catch{
    yield put(showAlert('Что-то пошло не так'))
    }
}


async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts?_limit=5');
    return  await response.json()
}