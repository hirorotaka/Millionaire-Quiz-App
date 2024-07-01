import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import play from '../../../sounds/play.mp3';
import correct from '../../../sounds/correct.mp3';
import wrong from '../../../sounds/wrong.mp3';
import './Trivia.css';
import { Question } from '../../../types/types';
import MuteButton from '../../MuteButton/MuteButton';

interface TriviaProps {
  data: Question[];
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  setStop: React.Dispatch<React.SetStateAction<boolean>>;
  isMuted: boolean;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Answer {
  text: string;
  correct: boolean;
}

export const Trivia = ({
  data,
  questionNumber,
  setQuestionNumber,
  setStop,
  isMuted,
  setIsMuted,
}: TriviaProps) => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [className, setClassName] = useState<string>('answer');
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    if (!isMuted) {
      letsPlay();
    }
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setClassName('answer');
  }, [data, questionNumber]);

  const delay = (duration: number, callback: () => void) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (answer: Answer) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    setClassName('answer active');
    delay(3000, () => {
      setClassName(answer.correct ? 'answer correct' : 'answer wrong');
    });
    delay(5000, () => {
      if (answer.correct) {
        if (!isMuted) {
          correctAnswer();
        }
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
        });
      } else {
        if (!isMuted) {
          wrongAnswer();
        }
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer) => (
          <button
            key={answer.text}
            className={`answer ${selectedAnswer === answer ? className : ''} ${isAnswered && selectedAnswer !== answer ? 'disabled' : ''}`}
            onClick={() => handleClick(answer)}
            disabled={isAnswered && selectedAnswer !== answer}
          >
            {answer.text}
          </button>
        ))}
      </div>
      <MuteButton isMuted={isMuted} setIsMuted={setIsMuted} />
    </div>
  );
};
