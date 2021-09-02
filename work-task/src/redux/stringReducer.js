
import { CREATE_STRING } from './types';


let intialState = {
    strings: []
}


export const stringReducer = (state = intialState,action)=>{

        switch(action.type) {
            case CREATE_STRING:
                return{ ...state,strings: [...state,...action.payload]}
        }
}