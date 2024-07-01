import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { Start } from './components/Start/Start';
import { MoneyPyramid } from './components/MoneyPyramid/MoneyPyramid';
import { Main } from './components/Main/Main';
import { QUESTIONS, MONEY_PYRAMID } from './constants/gameData';

function App() {
  const [userName, setUserName] = useState<string>('');
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [stop, setStop] = useState<boolean>(false);
  const [earned, setEarned] = useState<string>('0');
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const reversedMoneyPyramid = useMemo(() => [...MONEY_PYRAMID].reverse(), []);

  useEffect(() => {
    if (reversedMoneyPyramid && questionNumber > 1) {
      const foundItem = reversedMoneyPyramid.find(
        (m) => m.id === questionNumber - 1
      );
      if (foundItem) {
        setEarned(foundItem.amount);
      }
    }
  }, [questionNumber, reversedMoneyPyramid]);
  return (
    <>
      <div className="app">
        {!userName ? (
          <Start
            setUserName={setUserName}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
          />
        ) : (
          <>
            <Main
              earned={earned}
              stop={stop}
              data={QUESTIONS}
              setStop={setStop}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              isMuted={isMuted}
              setIsMuted={setIsMuted}
            />
            <MoneyPyramid
              moneyPyramid={reversedMoneyPyramid}
              questionNumber={questionNumber}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
