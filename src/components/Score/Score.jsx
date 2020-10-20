import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../contexts/Global'

export default function Score() {
    const { questionIndex, miss, setMiss, stop, setStop } = useContext(GlobalContext)
    const [ scored, setScored ] = useState(0)
    useEffect(()=>{
        if (questionIndex < 6 && questionIndex > 0) {
            scored>0?setMiss(1):setMiss(null)
            scored>0?setStop(scored):setStop(null)
            setScored(scored+1)
        }
        if (questionIndex > 5 && questionIndex < 11) {
            questionIndex===6?setScored(10):setScored(scored+10)
            setMiss(5)
            setStop(scored)   
        }
        if (questionIndex > 10 && questionIndex < 16) {
            questionIndex===11?setScored(100):setScored(scored+100)
            setMiss(50)
            setStop(scored)   
        }
        if (questionIndex > 15) {
            setScored(1)
            setMiss(null)
            setStop(scored)   
        }
    },[questionIndex])
    return (
        <div className="gold-container">
            <div className="text-container">
            <div className="gold"><h2>{miss}{questionIndex<2||questionIndex===16?"nada":" mil"}</h2></div>
                <h3 className="gold-text">ERRAR</h3>
            </div>
            <div className="text-container">
                <div className="gold"><h2>{stop}{questionIndex<2?"nada":" mil"}</h2></div>
                <h3 className="gold-text">PARAR</h3>
            </div>
            <div className="text-container">
                <div className="gold"><h2>{scored}{questionIndex>15?"milhão":" mil"}</h2></div>
                <h3 className="gold-text">ACERTAR</h3>
            </div>          
        </div>
    )
}