import { useEffect, useState } from 'react';
import './Timer.css';

interface TimerProps {
  setStop: React.Dispatch<React.SetStateAction<boolean>>;
  questionNumber: number;
}

export const Timer = ({ setStop, questionNumber }: TimerProps) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return <div className="timer">{timer}</div>;
};
