import React, { useState } from 'react';
function Answer({id, answer, selected, setSelected, correct, showCorrect, setTimer}) {
    const correctLook = correct == id && showCorrect===true ? "correct-look answer" : "question-look answer "
    const selectedLook = selected === id ? "select-look" : "circle"
    const [ confirmAnswer, setConfirmAnswer ] = useState(false)
    function handleClick(){
        setSelected(id)
        setConfirmAnswer(true)
    }
    function modalConfirm(){
        setTimer(0) 
        setConfirmAnswer(false)
    }
    return (
        <>
            <div role="button" onClick={()=>handleClick()} className={correctLook}>
                <div className={selectedLook}><h2 className="number">{id}</h2></div>
                {answer}  
            </div>
            <div className={confirmAnswer?"confirm-modal":"display-none"}>
                <div className="font confirm-container">
                    Você está certo disso?
                    <div className="btn-confirm-container">
                        <button className="confirm-btn yes-color" onClick={()=>modalConfirm()}>Sim</button>
                        <button className="confirm-btn no-color" onClick={()=>setConfirmAnswer(false)}>Não</button>
                    </div>
                    
                </div>
            </div>    
        </>
    )
}
export default Answer;