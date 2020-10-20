import React, { useContext } from 'react';
import Answer from '../Answer/Answer';
import Score from '../Score/Score';
import { GlobalContext } from '../../contexts/Global'

export default function QuestionList() {
    const { question } = useContext(GlobalContext)
    return (
        <> 
            <div className="question-look question">
                {question.question}
            </div>
            {question.alternatives.map((alternative)=> 
                <Answer {...alternative} key={alternative.id} correct={question.correct}/>
            )}
            <Score/>
        </>
    )
}