import React, { useEffect, useContext } from 'react';
import './QuestionsScreen.css'
import Logo from '../../assets/img/show.png'
import QuestionList from '../../components/QuestionList/QuestionList';
import Timer from '../../components/Timer/Timer';
import Menu from '../../components/Menu/Menu'
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
    const newQuestion = () => {
        const randomNum = Math.floor(Math.random() * (questionList.length - 1)) + 1
        const choose = questionList[randomNum]
        setQuestion(choose)
        setQuestionList(questionList.filter((temp) => temp.id !== choose.id ))
        setShowCorrect(false)
        setSelected(0)
        setTimer(90000)
        setTimerIsActive(true)
        setQuestionIndex(questionIndex+1)
    }
    const ShowCorrect = () => {
        setConfirmAnswer(false)
        setShowCorrect(true)
        setTimerIsActive(false)
    }
    useEffect(() => { 
        if (firstQuestion === false){
            newQuestion()
            setFirstQuestion(true)
        } else {
            if(timer===0 && questionIndex<16) {
                if (question.correct === selected) {
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
            if(timer===0 && questionIndex===16) {
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
        <div className="questions-area-background font">
            <div className="questions-area">
                <div className="logo-container">
                    <img className="logo" src={Logo} alt="Logo do Show do Milhão"/>
                    <div className="timer-container"> 
                        <Timer/>
                    </div>
                </div>
                <QuestionList/>
            </div>
            <div className="menu-container">
                <Menu/>
            </div>
        </div>
    )
}