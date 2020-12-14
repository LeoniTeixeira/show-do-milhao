import React from 'react';
import { useContext } from 'react';
import Gold from '../../assets/img/gold.png'
import { GlobalContext } from '../../contexts/Global'
import './FinishedScreen.css'

export default  function FinishedScreen() {
    const { setScreen, 
            questionIndex, 
            condition, 
            stop,
            playerName,
            miss
    } = useContext(GlobalContext)
    setTimeout(() => {
        setScreen('start')
    }, 4000)
    return (
        <div className="finished-bg font">
            <h1>{playerName}</h1>
            <h1>Você levou para casa!</h1>
            <img className="gold-image" src={Gold} alt=""/>
            
            <h1>{condition==='stop'?stop:miss}
                {miss===null&&stop===null?"Nada":""}
                {questionIndex>1&&questionIndex<17?" Mil Reais":""}
                {questionIndex===17?" Milhão de reais":""}
                <br/>
                {miss===null&&stop===null?<div/>:"Em barras de ouro"}
            </h1>
        </div>
    )
}