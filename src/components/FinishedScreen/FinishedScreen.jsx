import React from 'react';
import { useContext } from 'react';
import Gold from '../../assets/img/gold.png'
import { GlobalContext } from '../../contexts/Global'

export default  function FinishedScreen() {
    const { setScreen, 
            questionIndex, 
            condition, 
            stop, 
            miss
    } = useContext(GlobalContext)
    setTimeout(() => {
        setScreen('start')
    }, 3500)
    return (
        <div className="finished-bg font">
            <h1>Você levou para casa!</h1>
            <h1>{condition==='stop'?stop:miss}
                {miss===null&&stop===null?"Nada":""}
                {questionIndex>1&&questionIndex<17?" Mil Reais":""}
                {questionIndex===17?" Milhão de reais":""}
            </h1>
            <img className="gold-image" src={Gold} alt=""/>
            {miss===null&&stop===null?<div/>:<h1>Em barras de ouro</h1>}
        </div>
    )
}