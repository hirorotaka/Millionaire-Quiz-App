import { useRef } from 'react';
import MuteButton from '../MuteButton/MuteButton';
import './Start.css';

interface StartProps {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  isMuted: boolean;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Start = ({ setUserName, isMuted, setIsMuted }: StartProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current && inputRef.current.value) {
      setUserName(inputRef.current.value);
    }
  };
  return (
    <>
      <div className="start">
        <input
          className="startInput"
          placeholder="クイズへようこそ。名前を入れてください。"
          ref={inputRef}
        />
        <button className="startButton" onClick={handleClick}>
          クイズを始める
        </button>
        <MuteButton isMuted={isMuted} setIsMuted={setIsMuted} />
        <div className="startText">
          ※クイズを始めると音声がなります。ご注意ください。
          <br />
          音声は左端のミュートボタンを押して音声をオフにしてください。
        </div>
      </div>
    </>
  );
};
