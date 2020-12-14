import React, { useContext } from 'react';
import Logo from '../../assets/img/show.png';
import { GlobalContext } from '../../contexts/Global';
import './StartScreen.css';

export default function StartScreen() {
    const { setScreen, setQuestionIndex, playerName, setPlayerName, setTimesToJump } = useContext(GlobalContext)
    const handleChange = (e) => {
        const name = e.target.value
        setPlayerName(name)
    }
    setTimesToJump(3)
    setQuestionIndex(0)
    return (
        <div className="background-start-screen">
            <div className="logo-background">
                <img className="logo-start" src={Logo} alt="Logo Show do Milhão" />
            </div>
            <div className="start-menu">
                <label htmlFor="inputName">Digite o seu nome: </label>
                <input id="inputName" type="text" value={playerName} onChange={handleChange} />
                <div role="button" onClick={()=>setScreen('game')} className="button-start">
                    Jogar
                </div>
            </div>
        </div>
    )
}