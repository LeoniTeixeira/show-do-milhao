import React from 'react';
import './QuestionsArea.css'
import Logo from '../../assets/img/show.png'

// import { Container } from './styles';

function components() {
    return ( 
        <div className="questions-area-background font">
            <img className="logo" src={Logo}/>
            <div className="questions-container">
                <div className="question-look question">
                    De quem é a famosa frase “Penso, logo existo”?
                </div>
                <div className="question-look answer ">
                    <div className="circle"><h2 className="number">1</h2></div>
                    Platão
                </div>
                <div className="question-look answer">
                    <div className="circle"><h2 className="number">2</h2></div>
                    Galileu Galilei
                </div>
                <div className="question-look answer">
                    <div className="circle"><h2 className="number">3</h2></div>
                    Descartes
                </div>
                <div className="question-look answer">
                    <div className="circle"><h2 className="number">4</h2></div>    
                    Sócrates
                </div>
                <div className="gold-container">
                    <div className="text-container">
                        <div className="gold"><h2>25 MIL</h2></div>
                        <h3 className="gold-text">ERRAR</h3>
                    </div>
                    <div className="text-container">
                        <div className="gold"><h2>50 MIL</h2></div>
                        <h3 className="gold-text">PARAR</h3>
                    </div>
                    <div className="text-container">
                        <div className="gold"><h2>100 MIL</h2></div>
                        <h3 className="gold-text">ACERTAR</h3>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default components;