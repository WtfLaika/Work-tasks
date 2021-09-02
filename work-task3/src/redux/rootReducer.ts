import {cellReducer} from "./cellReducer";
import {combineReducers} from "@reduxjs/toolkit";


export const rootReducer = combineReducers( {
    gameProps: cellReducer
})