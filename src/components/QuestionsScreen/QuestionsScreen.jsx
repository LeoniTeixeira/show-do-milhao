import React, { useState, useEffect } from 'react';
import './QuestionsScreen.css'
import Logo from '../../assets/img/show.png'
import Questions from '../../data/questions.json'
import QuestionList from '../QuestionList/QuestionList';
import Timer from '../Timer/Timer';

function QuestionsScreen() {
    const [ questionList, setQuestionList ] = useState(Questions)
    const [ question, setQuestion ] = useState(questionList[0])
    const [ selected, setSelected ] = useState(0)
    const [ questionIndex, setQuestionIndex ] = useState(0)
    const [ timer, setTimer ] = useState(0)
    const [ timerIsActive, setTimerIsActive ] = useState(false)
    const [ showCorrect, setShowCorrect ] = useState(false)
    function newQuestion(){
        const randomNum = Math.floor(Math.random() * (questionList.length - 1)) + 1
        console.log('sorteado', randomNum)
        console.log('tamanhoLista',questionList.length)
        const choose = questionList[randomNum]
        setTimer(1)
        setTimerIsActive(true)
        setShowCorrect(false)
        setQuestionIndex(questionIndex+1)
        setSelected(0)
        setQuestion(choose)
        setQuestionList(questionList.filter((temp) => temp.id !== choose.id ))
    }
    function ShowCorrect(){
        setShowCorrect(true)
        setTimerIsActive(false)
    }
    
    useEffect(()=>{
        if(timer===0&&questionIndex<17){
            ShowCorrect()
            setTimeout(() => {
                newQuestion()
            }, 100)
        }
    },[timer])
   
    return ( 
        <div className="questions-area-background font">
            <img className="logo" src={Logo} alt="Logo do Show do Milhão"/>
            <div className="questions-container">
                <QuestionList question={question} selected={selected} setSelected={setSelected} questionIndex={questionIndex} showCorrect={showCorrect}/>
            </div>
            <Timer timer={timer} setTimer={setTimer} timerIsActive={timerIsActive} setTimerIsActive={setTimerIsActive}/>
        </div>
    )
}
export default QuestionsScreen;