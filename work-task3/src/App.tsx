import React, {useEffect} from 'react';
import './App.css';
import {PlayField} from "./components/PlayField";
import {setUserName1, setUserName2} from './redux/actions';
import { useAppSelector} from './app/hooks';
import {useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        startGame()
    }, [])

    const useSelector = useAppSelector;

    function startGame(): void {
        let userName1: string | null = prompt('Введите имя первого игрока(больше 2-х символов)');
        if (userName1 != null && userName1.trim().length > 2) {
            dispatch(setUserName1(userName1))
        } else {
            dispatch(setUserName2('Player1'))
        }
        let userName2: string | null = prompt('Введите имя второго игрока(больше 2-х символов)');
        if (userName2 != null && userName2.trim().length > 2) {
            dispatch(setUserName2(userName2))
        } else {
            userName2 = 'Player2'
            dispatch(setUserName2('Player2'))
        }

    }

    const name1 = useSelector(state => state.gameProps.userName1);
    const name2 = useSelector(state => state.gameProps.userName2);
    const scoreUser1 = useSelector(state => state.gameProps.winsUser1);
    const scoreUser2 = useSelector(state => state.gameProps.winsUser2);

    return (
        <div className="container">
            <PlayField/>
            <div className='score-container'>
                <div className='score-title title'>Score</div>
                <div className='player1-container'>
                    <div className='player1 title'>{`${name1} :`}</div>
                    <div className='score-player1'>{scoreUser1}</div>
                </div>
                <div className='player2-container'>

                    <div className='player2 title'>{`${name2} :`} </div>
                    <div className='score-player2'>{scoreUser2}</div>
                </div>

            </div>
        </div>
    );
}

export default App;
