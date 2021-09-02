
import { takeEvery, select } from '@redux-saga/core/effects';
import { UserActionsTypes } from './types';
import { put, delay } from '@redux-saga/core/effects';
import { showError } from './actions';

export function* sagaWatcher() {
    yield takeEvery(UserActionsTypes.REQUSET_STEP, sagaWorker);
}



const getNextPlayer = (state: any) => state.gameProps.nextPlayer
const getStepNumber = (state: any) => state.gameProps.stepNumber
const getSquares = (state: any) => state.gameProps.squares
export function* sagaWorker({ type, payload }: {
    type: UserActionsTypes.REQUSET_STEP,
    payload: string
}) {

    try {

        const nextPlayer: ReturnType<typeof getNextPlayer> = yield select(getNextPlayer);

        if (nextPlayer) {
            yield put({ type: UserActionsTypes.STEP_USER_1, payload: payload });
        } else {
            yield put({ type: UserActionsTypes.STEP_USER_2, payload: payload });
        }
        const stepNumber: ReturnType<typeof getStepNumber> = yield select(getStepNumber);
        if (stepNumber > 4 && stepNumber < 8) {
            const squares: ReturnType<typeof getSquares> = yield select(getSquares);
            const winner: any = yield checkWin(squares)
            if (winner[0]) {
                if (winner[0] == 'X') {
                    yield alert('Выиграл игрок1');
                    yield put({ type: UserActionsTypes.WIN_USER1, payload: winner[1] });
                } else if (winner[0] == 'O') {
                    yield alert('Выиграл игрок2');

                }
                yield showLine(winner[1])
                yield delay(2000);
                yield hideLine(winner[1])
                yield put({ type: UserActionsTypes.START_NEW_GAME })

            }
        }
        if (stepNumber >= 8) {
            const squares: ReturnType<typeof getSquares> = yield select(getSquares);
            const winner: any = yield checkWin(squares)
            if (!winner[0]) {
                yield showDraw();
                yield delay(2000);
                yield put({ type: UserActionsTypes.START_NEW_GAME })
            } else {
                if (winner[0] == 'X') {
                    yield alert('Выиграл игрок1');
                    yield put({ type: UserActionsTypes.WIN_USER1, payload: winner[1] });


                } else if (winner[0] == 'O') {
                    yield alert('Выиграл игрок2');
                    yield put({ type: UserActionsTypes.WIN_USER2, payload: winner[1] });
                }
                yield showLine(winner[1])
                yield delay(2000);
                yield hideLine(winner[1]);
                yield put({ type: UserActionsTypes.START_NEW_GAME });
            }
        }

    } catch (e) {
        yield put(showError(e))
    }
}

function checkWin(squares: string | null[][]) {
    const winCombos: number[][] = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    for (let i = 0; i < winCombos.length; i++) {
        const [a, b, c] = winCombos[i];
        if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
            return [squares[a], [a, b, c]]
        }

    }
    return false
}

function showLine(arr: number[]) {

    const el1 = document.querySelector(`#cell${arr[0]}`);
    const el2 = document.querySelector(`#cell${arr[1]}`);
    const el3 = document.querySelector(`#cell${arr[2]}`);
    if (checkArrs(arr[0], arr[1], arr[2], 0, 1, 2) || checkArrs(arr[0], arr[1], arr[2], 3, 4, 5) || checkArrs(arr[0], arr[1], arr[2], 6, 7, 8)) {
        el1?.setAttribute('class', 'cell line-hor');
        el2?.setAttribute('class', 'cell line-hor');
        el3?.setAttribute('class', 'cell line-horl');

    } else if (checkArrs(arr[0], arr[1], arr[2], 0, 3, 6) || checkArrs(arr[0], arr[1], arr[2], 1, 4, 7) || checkArrs(arr[0], arr[1], arr[2], 2, 5, 8)) {
        el1?.setAttribute('class', 'cell line-ver');
        el2?.setAttribute('class', 'cell line-ver');
        el3?.setAttribute('class', 'cell line-verl');
    } else if (checkArrs(arr[0], arr[1], arr[2], 0, 4, 8)) {
        el1?.setAttribute('class', 'cell line-45deg');
        el2?.setAttribute('class', 'cell line-45deg');
        el3?.setAttribute('class', 'cell line-45degl');
    } else if (checkArrs(arr[0], arr[1], arr[2], 2, 4, 6)) {
        el1?.setAttribute('class', 'cell line--45deg');
        el2?.setAttribute('class', 'cell line--45deg');
        el3?.setAttribute('class', 'cell line--45degl');
    }


}

function hideLine(arr: number[]) {
    const el1 = document.querySelector(`#cell${arr[0]}`);
    const el2 = document.querySelector(`#cell${arr[1]}`);
    const el3 = document.querySelector(`#cell${arr[2]}`);
    el1?.setAttribute('class', 'cell');
    el2?.setAttribute('class', 'cell');
    el3?.setAttribute('class', 'cell');
}


function checkArrs(a: number, b: number, c: number, x: number, y: number, z: number): boolean {
    if (a == x && b == y && c == z) {

        return true
    }
    return false
}

function showDraw() {
    alert('Ничья')
}