import React, { useContext } from 'react';
import QuestionsScreen from '../QuestionsScreen/QuestionsScreen'
import StartScreen from '../StartScreen/StartScreen'
import FinishedScreen from '../FinishedScreen/FinishedScreen';
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