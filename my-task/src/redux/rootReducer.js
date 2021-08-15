import {messageReducer} from './messageReducer'
import { combineReducers } from 'redux';


export const rootReducer = combineReducers({
    messages:messageReducer,
})

