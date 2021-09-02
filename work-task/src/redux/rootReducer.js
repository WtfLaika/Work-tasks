
import { combineReducers } from 'redux';
import { stringReducer } from './stringReducer';

export const rootReducer = combineReducers({
    strings: stringReducer
})