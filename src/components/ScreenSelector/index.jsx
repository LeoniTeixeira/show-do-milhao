import React, { useContext } from 'react';
import QuestionsScreen from '../../screens/QuestionsScreen'
import StartScreen from '../../screens/StartScreen'
import FinishedScreen from '../../screens/FinishedScreen';
import { GlobalContext } from '../../contexts/Global'

export default function ScreenSelector() {
  const { screen } = useContext(GlobalContext)
  function screenSelector(){
    switch (screen) {
      case 'start':
        return <StartScreen/>
      case 'game':
        return <QuestionsScreen/>
      case 'finished':
        return <FinishedScreen/>
      default:
        break;
    }
  }
  return (
    <>
      {screenSelector()}
    </>
  )
}