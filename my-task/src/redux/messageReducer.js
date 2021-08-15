import { CREATE_MESSAGE, DELETE_MESSAGE } from "./types"


const initialStates = {
    messages: []
}

export const messageReducer = (state = initialStates,action) => {
        switch(action.type){
            case CREATE_MESSAGE:
            return {...state,messages:[...state.messages,action.payload]}
            case DELETE_MESSAGE:
                return  Object.assign({}, {messages: state.messages.filter(message => message.id !== action.payload)})
            default: return state
        }
       
    }

