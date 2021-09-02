
export enum UserActionsTypes {
    REQUSET_STEP = 'REQUEST_STEP',
    STEP_USER_1 = 'STEP_USER_1',
    STEP_USER_2 = 'STEP_USER_2',
    USER_ERROR = 'USER_ERROR',
    USER_NAME1 = 'USER_NAME1',
    USER_NAME2 = 'USER_NAME2',
    CHECK_WIN = 'CHECK_WIN',
    WIN_USER1 = 'WIN_USER1',
    WIN_USER2 = 'WIN_USER2',
    START_NEW_GAME = 'START_NEW_GAME'



}

export interface RequstStepAction {
    type: UserActionsTypes.REQUSET_STEP,
    payload: number | string
}
export interface StepUser1Action {
    type: UserActionsTypes.STEP_USER_1,
    payload: number | string
}

export interface StepUser2Action {
    type: UserActionsTypes.STEP_USER_2
    payload: number | string
}
export interface UserErrorAction {
    type: UserActionsTypes.USER_ERROR
    payload: string
}

export interface UserSetName1 {
    type: UserActionsTypes.USER_NAME1,
    payload: string
}
export interface UserSetName2 {
    type: UserActionsTypes.USER_NAME2,
    payload: string
}

export interface WinUser1Action {
    type: UserActionsTypes.WIN_USER1,
    payload: number[]

}
export interface WinUser2Action {
    type: UserActionsTypes.WIN_USER2,
    payload: number[]

}
export interface StartNewGameAction {
    type:UserActionsTypes.START_NEW_GAME,
}



export type UserAction = UserSetName1 | UserSetName2 | UserErrorAction | StepUser1Action | StepUser2Action | RequstStepAction | WinUser1Action | WinUser2Action | StartNewGameAction;

export interface InitialStateType {
    nextPlayer: boolean,
    squares: (string | null)[],
    stepNumber: number,
    error: null | string,
    userName1: string,
    userName2: string,
    winsUser1: number,
    winsUser2: number,
    winComb: [] | number[]
}