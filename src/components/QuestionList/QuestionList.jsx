import React, { useState } from 'react';
import Answer from '../Answer/Answer';
import Score from '../Score/Score';
function QuestionList({question, selected, setSelected, questionIndex, showCorrect, setTimer, miss, setMiss, stop, setStop}) {
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
            <Score 
                questionIndex={questionIndex}
                miss={miss}
                setMiss={setMiss}
                stop={stop}
                setStop={setStop}
            />
        </>
    )
}
export default QuestionList;