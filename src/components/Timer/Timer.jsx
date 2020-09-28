import React, {useEffect} from 'react';


function Timer({timerIsActive, timer, setTimer}) {
    useEffect(() => {
        let interval = null;
        if (timerIsActive&&timer>0) {
          interval = setInterval(() => {
            setTimer(timer => timer - 1);
          }, 1000);
        } else if (!timerIsActive && timer > 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [timerIsActive, timer]);
   
    return (
        <div className="question-timer"> tempo: {timer} segundos </div>
    )
}

export default Timer;