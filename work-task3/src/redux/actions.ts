import { UserActionsTypes } from "./types";

interface Iid {
    id: string | number
}

export function requestStep(id: Iid) {
    return {
        type: UserActionsTypes.REQUSET_STEP,
        payload: id
    }
}
export function setUserName1(userName1: string) {
    return {
        type: UserActionsTypes.USER_NAME1,
        payload: userName1

    }
}

export function setUserName2(userName2: string) {
    return {
        type: UserActionsTypes.USER_NAME2,
        payload: userName2

    }
}

export function stepUser1(id: Iid) {
    return {
        type: UserActionsTypes.STEP_USER_1,
        payload: id
    }
}

export function stepUser2(id: Iid) {
    return {
        type: UserActionsTypes.STEP_USER_2,
        payload: id
    }
}



export function showError(e:any) {
    return {
        type: UserActionsTypes.USER_ERROR,
        payload: "Произошла ошибка"+ `${e.message}`
    }
}
