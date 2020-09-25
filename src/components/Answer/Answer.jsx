import React, { useState } from 'react';

function Answer({id, answer, selected, setSelected}) {
    const look = selected === id ? "select-look answer " : "question-look answer "
    return (
        <>
        <div role="button" onClick={() => {setSelected(id)}} className={look}>
            <div className="circle"><h2 className="number">{id}</h2></div>
            {answer}  
        </div>
        
        </>
    )
}
export default Answer;