import React, { useContext } from 'react';
import Answer from '../Answer';
import Score from '../Score';
import { GlobalContext } from '../../contexts/Global'
import './QuestionList.css'

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