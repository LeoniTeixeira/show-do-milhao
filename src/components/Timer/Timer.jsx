import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../../contexts/Global'

export default function Timer() {
  const { timerIsActive, timer, setTimer } = useContext(GlobalContext)
  useEffect(() => {
    let interval = null;
    if (timerIsActive&&timer>0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (!timerIsActive && timer > 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
  return (
    <div className="question-timer"> tempo: {timer} segundos </div>
  )
}