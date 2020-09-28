import React, {useState} from 'react';
import QuestionsScreen from './components/QuestionsScreen/QuestionsScreen'
import StartScreen from './components/StartScreen/StartScreen'
import './App.css';

function App() {
  const [ screen, setScreen ] = useState(0)

  function screenSelect(){
    switch (screen) {
      case 0:
        return <StartScreen setScreen={setScreen} screen={screen}/>
      case 1:
        return <QuestionsScreen setScreen={setScreen}/>
    }
  }
  return (
    <div className="App">
      {screenSelect()}
    </div>
  );
}
export default App;

