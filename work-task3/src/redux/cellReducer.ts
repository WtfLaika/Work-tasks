import { InitialStateType, UserAction, UserActionsTypes } from "./types";


let intitialState: InitialStateType = {
    nextPlayer: true,
    squares: Array(9).fill(null),
    stepNumber: 0,
    error: null,
    userName1: 'Player1',
    userName2: 'Player2',
    winsUser1: 0,
    winsUser2: 0,
    winComb: []
}


export const cellReducer = (state = intitialState, action: UserAction): InitialStateType => {


    switch (action.type) {
        case UserActionsTypes.STEP_USER_1:
            return {
                ...state, nextPlayer: false, stepNumber: state.stepNumber + 1, squares: state.squares.map((square: string | null, index: number) => {
                    if (index == Number(action.payload)) {
                        return "X"
                    }
                    return square
                })
            }
        case UserActionsTypes.STEP_USER_2:
            return {
                ...state, nextPlayer: true, stepNumber: state.stepNumber + 1,
                squares: state.squares.map((square: string | null, index: number) => {
                    if (index == Number(action.payload)) {
                        return 'O'
                    }
                    return square
                })
            }
        case UserActionsTypes.USER_ERROR:
            return { ...state, error: action.payload }
        case UserActionsTypes.USER_NAME1:
            return { ...state, userName1: action.payload, error:null }
        case UserActionsTypes.USER_NAME2:
            return { ...state, userName2: action.payload,error:null }
        case UserActionsTypes.WIN_USER1:
            return { ...state, winsUser1: state.winsUser1 + 1, winComb: action.payload,error:null }
        case UserActionsTypes.WIN_USER2:
            return { ...state, winsUser2: state.winsUser2 + 1, winComb: action.payload,error:null }
        case UserActionsTypes.START_NEW_GAME:
            return { ...state,stepNumber:0,squares:Array(9).fill(null),winComb:[] ,error:null,nextPlayer:true}
        default: return state

    }
}