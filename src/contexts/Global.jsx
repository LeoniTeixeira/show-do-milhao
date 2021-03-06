import React, { createContext, useState } from "react"
import Questions from '../data/questions.json'

export const GlobalContext = createContext()

export default function ScreenProvider({ children }) {
    const [screen, setScreen] = useState('start');
    const [ questionIndex, setQuestionIndex ] = useState(0);
    const [ condition, setCondition ] = useState('stop');
    const [ miss, setMiss ] = useState(null);
    const [ stop, setStop] = useState(null);
    const [ firstQuestion, setFirstQuestion ] = useState(false);
    const [ questionList, setQuestionList ] = useState(Questions);
    const [ question, setQuestion ] = useState(questionList[0]);
    const [ selected, setSelected ] = useState(0);
    const [ timer, setTimer ] = useState(0);
    const [ timerIsActive, setTimerIsActive ] = useState(false);
    const [ showCorrect, setShowCorrect ] = useState(false);
    const [ confirmAnswer, setConfirmAnswer ] = useState(false);
    const [hideMenu, setHideMenu] = useState("hide-menu menu-area");
    const [ playerName, setPlayerName ] = useState('');
    const [ stopGame, setStopGame ] = useState(false);
    const [ jumpQuestion, setJumpQuestion ] = useState(false);
    const [ timesToJump, setTimesToJump ] = useState(3);
    
    return (
        <GlobalContext.Provider 
            value={{ 
                screen, 
                setScreen,
                questionIndex,
                setQuestionIndex,
                condition, 
                setCondition,
                miss, 
                setMiss,
                stop, 
                setStop,
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
                timerIsActive, 
                setTimerIsActive,
                showCorrect, 
                setShowCorrect,
                confirmAnswer, 
                setConfirmAnswer,
                playerName,
                setPlayerName,
                stopGame,
                setStopGame,
                jumpQuestion,
                setJumpQuestion,
                timesToJump, 
                setTimesToJump,
                hideMenu, 
                setHideMenu
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}