import React from 'react';

function Answer({id, answer, selected, setSelected, correct, showCorrect}) {
    const correctLook = correct == id && showCorrect===true ? "correct-look answer" : "question-look answer "
    const selectedLook = selected === id ? "select-look" : "circle"
    return (
        <>
        <div role="button" onClick={() => {setSelected(id)}} className={correctLook}>
            <div className={selectedLook}><h2 className="number">{id}</h2></div>
            {answer}  
        </div>
        {console.log(correct, '===', id)}
        </>
    )
}
export default Answer;