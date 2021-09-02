import { CREATE_MESSAGE } from "../../../my-task/src/redux/types";
import { HIDE_ALERT } from "./types";


export function createString(string){
    return {
        type:CREATE_MESSAGE,
        payload:string
    }
}

export function hideAlert(text){
    return{
        type:HIDE_ALERT
    }
}