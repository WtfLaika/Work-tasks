import { CREATE_MESSAGE, DELETE_MESSAGE } from "./types";


export function createMessage(message) {
    return {
        type: CREATE_MESSAGE,
        payload: message,
    }
}

export function deleteMessage(message) {
    return {
        type: DELETE_MESSAGE,
        payload: message
    }
}