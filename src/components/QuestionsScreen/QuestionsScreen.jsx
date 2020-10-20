import React, { useEffect, useContext } from 'react';
import './QuestionsScreen.css'
import Logo from '../../assets/img/show.png'
import QuestionList from '../QuestionList/QuestionList';
import Timer from '../Timer/Timer';
import Menu from '../Menu/Menu'
import { GlobalContext } from '../../contexts/Global'

export default function QuestionsScreen() {
    const { setScreen,
            questionIndex,
            setQuestionIndex,
            setCondition,
            firstQuestion, 
            setFirstQuestion,
            questionList, 
            setQuestionList,
            question, 
            setQuestion,
            selected, 
            setSelected,
            timer, 
            setTimer,
            setTimerIsActive,
            setShowCorrect, 
            setConfirmAnswer
    } = useContext(GlobalContext)
    function newQuestion(){
        const randomNum = Math.floor(Math.random() * (questionList.length - 1)) + 1
        const choose = questionList[randomNum]
        setTimer(40)
        setTimerIsActive(true)
        setShowCorrect(false)
        setQuestionIndex(questionIndex+1)
        setSelected(0)
        setQuestion(choose)
        setQuestionList(questionList.filter((temp) => temp.id !== choose.id ))
    }
    function ShowCorrect(){
        setConfirmAnswer(false)
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
                if (question.correct===selected){
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
                if (question.correct===selected){
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
    }, [timer])
    return ( 
        <div className="questions-area-background font display-flex">
            <div className="questions-area">
                <div className="display-flex center">
                    <img className="logo" src={Logo} alt="Logo do Show do Milhão"/>
                    <div className="timer-container"> 
                        <Timer/>
                    </div>
                </div>
                <QuestionList/>
            </div>
            <Menu/>
        </div>
    )
}