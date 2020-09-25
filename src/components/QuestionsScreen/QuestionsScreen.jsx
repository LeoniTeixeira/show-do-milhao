import React, { useState } from 'react';
import './QuestionsScreen.css'
import Logo from '../../assets/img/show.png'
import Questions from '../../data/questions.json'
import QuestionList from '../QuestionList/QuestionList';

function QuestionsScreen() {
    const [ questionList, setQuestionList ] = useState(Questions)
    const [ question, setQuestion ] = useState(questionList[0])
    const [ selected, setSelected ] = useState(0)
    const [ questionIndex, setQuestionIndex ] = useState(0)
    function newQuestion(){
        const randomNum = Math.floor(Math.random() * (questionList.length - 1)) + 1
        console.log('sorteado', randomNum)
        console.log('tamanhoLista',questionList.length)
        const choose = questionList[randomNum]
        setQuestionIndex(questionIndex+1)
        setSelected(0)
        setQuestion(choose)
        setQuestionList(questionList.filter((temp) => temp.id !== choose.id ))
    }
    return ( 
        <div className="questions-area-background font">
            <img className="logo" src={Logo} alt="Logo do Show do Milhão"/>
            <div className="questions-container">
                <QuestionList question={question} selected={selected} setSelected={setSelected} questionIndex={questionIndex}/>
            </div>
            <button onClick={newQuestion}>nova pergunta</button>
            
        </div>
    )
}
export default QuestionsScreen;