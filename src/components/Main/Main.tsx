import { Timer } from './Timer/Timer';
import { Trivia } from './Trivia/Trivia';
import './Main.css';
import { Question } from '../../types/types';

interface MainProps {
  earned: string;
  stop: boolean;
  setStop: React.Dispatch<React.SetStateAction<boolean>>;
  data: Question[];
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  isMuted: boolean;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Main = ({
  earned,
  stop,
  setStop,
  data,
  questionNumber,
  setQuestionNumber,
  isMuted,
  setIsMuted,
}: MainProps) => {
  return (
    <div className="main">
      {stop ? (
        <h1 className="endText">GET： {earned}</h1>
      ) : (
        <>
          <div className="top">
            <Timer setStop={setStop} questionNumber={questionNumber} />
          </div>
          <div className="bottom">
            <Trivia
              data={data}
              setStop={setStop}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              isMuted={isMuted}
              setIsMuted={setIsMuted}
            />
          </div>
        </>
      )}
    </div>
  );
};
