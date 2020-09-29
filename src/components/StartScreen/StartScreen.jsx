import React from 'react';
import Logo from '../../assets/img/show.png'
import './StartScreen.css'
function StartScreen({setScreen, setQuestionIndex}) {
    setQuestionIndex(0)
    return (
        <div className="background-start-screen">
            <div className="logo-background">
                <img className="logo-start" src={Logo} alt="Logo Show do Milhão"/>
            </div>
            <div className="start-menu">
                <label htmlFor="inputName">Digite o seu nome: </label>
                <input id="inputName" type="text"/>
                <div role="button" onClick={()=>setScreen('game')} className="button-start">
                    Jogar
                </div>
            </div>
        </div>
    )
}
export default StartScreen;