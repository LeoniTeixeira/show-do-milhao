import React, { useState, useEffect } from 'react';
import './QuestionsScreen.css'
import Logo from '../../assets/img/show.png'
import Questions from '../../data/questions.json'
import QuestionList from '../QuestionList/QuestionList';
import Timer from '../Timer/Timer';
function QuestionsScreen({ setScreen, questionIndex, setQuestionIndex, setCondition, miss, setMiss, stop, setStop }) {
    const [ firstQuestion, setFirstQuestion ] = useState(false)
    const [ questionList, setQuestionList ] = useState(Questions)
    const [ question, setQuestion ] = useState(questionList[0])
    const [ selected, setSelected ] = useState(0)
    const [ timer, setTimer ] = useState(0)
    const [ timerIsActive, setTimerIsActive ] = useState(false)
    const [ showCorrect, setShowCorrect ] = useState(false)
    const [ confirmAnswer, setConfirmAnswer ] = useState(false)
    function newQuestion(){
        const randomNum = Math.floor(Math.random() * (questionList.length - 1)) + 1
        const choose = questionList[randomNum]
        setConfirmAnswer(false)
        setTimer(20)
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
        // if is the initial question 
        if (firstQuestion===false){
            newQuestion()
            setFirstQuestion(true)
        } else {
            // if the timer is over and don't is the last question
            if(timer===0&&questionIndex<16){
                //if the select answer is correct
                if (question.correct==selected){
                    setTimeout(() => {
                        ShowCorrect()
                    }, 1000)
                    setTimeout(() => {
                        newQuestion()
                    }, 2500)
                } else {
                    setTimeout(() => {
                        ShowCorrect()
                    }, 1000)
                    setTimeout(() => {
                        setFirstQuestion(false)
                        setCondition('mistake')
                        setScreen('finished')
                    }, 2500) 
                }
            }
            if(timer===0&&questionIndex===16){
                setTimeout(() => {
                    ShowCorrect()
                }, 1500)
                if (question.correct==selected){
                    setTimeout(() => {
                        setFirstQuestion(false)
                        setSelected(0)
                        setCondition('stop')
                        setQuestionIndex(17)
                        setScreen('finished')
                    }, 2500) 
                }
            }
        }
    },[timer])
    return ( 
        <div className="questions-area-background font">
            <img className="logo" src={Logo} alt="Logo do Show do Milhão"/>
            <div className="questions-container">
                <QuestionList 
                    question={question} 
                    selected={selected} 
                    setSelected={setSelected} 
                    questionIndex={questionIndex} 
                    showCorrect={showCorrect} 
                    setTimer={setTimer}
                    miss={miss}
                    setMiss={setMiss}
                    stop={stop}
                    setStop={setStop}
                    confirmAnswer={confirmAnswer}
                    setConfirmAnswer={setConfirmAnswer}
                />
            </div>
            <Timer timer={timer} setTimer={setTimer} timerIsActive={timerIsActive} setTimerIsActive={setTimerIsActive}/>
        </div>
    )
}
export default QuestionsScreen;