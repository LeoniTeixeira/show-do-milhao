import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../../contexts/Global';
import Logo from '../../assets/img/show.png';
import QuestionList from '../../components/QuestionList';
import Timer from '../../components/Timer';
import Menu from '../../components/Menu';
import './QuestionsScreen.css';

export default function QuestionsScreen() {
    const { setScreen,
            playerName,
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
            setConfirmAnswer,
            stopGame,
            setStopGame,
            jumpQuestion,
            setJumpQuestion,
            timesToJump,
            setTimesToJump,
            setHideMenu
    } = useContext(GlobalContext);

    const newQuestion = (jump) => {
        const randomNum = Math.floor(Math.random() * (questionList.length - 1)) + 1
        const choose = questionList[randomNum]
        setQuestion(choose);
        setQuestionList(questionList.filter((temp) => temp.id !== choose.id ));
        setShowCorrect(false);
        setSelected(0);
        setTimer(9999);
        setTimerIsActive(true);
        jump && setQuestionIndex(questionIndex+1);
    }

    const ShowCorrect = () => {
        setConfirmAnswer(false);
        setShowCorrect(true);
        setTimerIsActive(false);
    }

    useEffect(() => { 
        if (firstQuestion === false){
            newQuestion(true);
            setFirstQuestion(true);
        } else {
            if(timer === 0 && questionIndex < 16) {
                if (question.correct === selected) {
                    setTimeout(() => {
                        ShowCorrect();
                    }, 1000);
                    setTimeout(() => {
                        newQuestion(true);
                    }, 2500);
                } else {
                    setTimeout(() => {
                        ShowCorrect();
                    }, 1000);
                    setTimeout(() => {
                        setFirstQuestion(false);
                        setCondition('mistake');
                        setScreen('finished');
                    }, 2500);
                }
            }
            if(timer === 0 && questionIndex === 16) {
                setTimeout(() => {
                    ShowCorrect();
                }, 1500);
                if (question.correct === selected){
                    setTimeout(() => {
                        setFirstQuestion(false);
                        setSelected(0);
                        setCondition('stop');
                        setQuestionIndex(17);
                        setScreen('finished');
                    }, 2500) ;
                };
            };
            if(stopGame === true) {
                setFirstQuestion(false);
                setSelected(0);
                setCondition('stop');
                setScreen('finished');
                setStopGame(false);
                setHideMenu('hide-menu menu-area');
            };
            if(jumpQuestion === true) {
                setJumpQuestion(false)
                if(timesToJump > 0) {
                    setTimesToJump(timesToJump - 1);
                    newQuestion(false);
                    setHideMenu('hide-menu menu-area');
                };
            };
        }
    }, [timer]);
    
    return ( 
        <div className="questions-area-background font">
            <div className="questions-area">
                <div className="logo-container">
                    <img className="logo" src={Logo} alt="Logo do Show do Milhão"/>
                    <div className="timer-container"> 
                        <p>{playerName} <Timer/></p>
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