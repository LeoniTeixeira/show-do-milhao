import React, { useState } from 'react';
import Answer from '../Answer/Answer';
import Score from '../Score/Score';

function QuestionList({question, selected, setSelected, questionIndex, showCorrect, setTimer}) {
    return (
        <> 
            <div className="question-look question">
                {question.question}
            </div>
            {question.alternatives.map((alternative)=> 
            <Answer key={alternative.id}
                {...alternative}
                selected={selected} 
                setSelected={setSelected}   
                correct={question.correct} 
                showCorrect={showCorrect} 
                setTimer={setTimer}    
                                />
            )}
            <Score questionIndex={questionIndex}/>
        </>
    )
}
export default QuestionList;