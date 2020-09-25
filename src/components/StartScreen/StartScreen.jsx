import React from 'react';
import Logo from '../../assets/img/show.png'
import './StartScreen.css'

function StartScreen() {
    return (
        <div className="background-start-screen">
            <div className="logo-background">
                <img src={Logo} alt="Logo Show do Milhão"/>
            </div>
            <div className="start-menu">
                <label htmlFor="inputName">Digite o seu nome: </label>
                <input id="inputName" type="text"/>
                <div role="button" className="button-start">
                    Jogar
                </div>
            </div>
        </div>
    )
}
export default StartScreen;