/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import Gold from '../../assets/img/gold.png'
function FinishedScreen({questionIndex, condition, setScreen, stop, miss}) {
    setTimeout(() => {
        setScreen('start')
    }, 3500)
    return (
        <div className="finished-bg font">
                <h1>Você levou para casa!</h1>
                <h1>{condition==='stop'?stop:miss}{miss===null&&stop===null?"Nada":""}
                  {questionIndex>1&&questionIndex<17?" Mil Reais":""}{questionIndex===17?" Milhão de reais":""}</h1>
                <img className="gold-image" src={Gold} alt=""/>
                {miss===null&&stop===null?<h1/>:<h1>Em barras de ouro</h1>}
        </div>
    )
}
export default FinishedScreen;