import React, {useState} from 'react';
import QuestionsScreen from './components/QuestionsScreen/QuestionsScreen'
import StartScreen from './components/StartScreen/StartScreen'
import FinishedScreen from './components/FinishedScreen/FinishedScreen';
import './App.css';
export default function App() {
  const [ screen, setScreen ] = useState('start')
  const [ questionIndex, setQuestionIndex ] = useState(0)
  const [ condition, setCondition ] = useState('stop')
  const [ miss, setMiss ] = useState(null)
  const [ stop, setStop] = useState(null)
  function screenSelect(){
    switch (screen) {
      case 'start':
        return <StartScreen setScreen={setScreen} setQuestionIndex={setQuestionIndex}/>
      case 'game':
        return <QuestionsScreen 
                  setScreen={setScreen} 
                  questionIndex={questionIndex} 
                  setQuestionIndex={setQuestionIndex} 
                  setCondition={setCondition}
                  miss={miss}
                  setMiss={setMiss}
                  stop={stop}
                  setStop={setStop}
                />
      case 'finished':
        return <FinishedScreen 
                  setScreen={setScreen} 
                  questionIndex={questionIndex} 
                  setQuestionIndex={setQuestionIndex} 
                  condition={condition}
                  stop={stop}
                  miss={miss}
                />
      default:
        break;
    }
  }
  return (
    <div className="App">
      {screenSelect()}
    </div>
  );
}


