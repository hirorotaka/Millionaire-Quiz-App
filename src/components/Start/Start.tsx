import { useRef } from 'react';
import './Start.css';
import MuteButton from '../MuteButton/MuteButton';

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
          placeholder="enter your name"
          ref={inputRef}
        />
        <button className="startButton" onClick={handleClick}>
          Start
        </button>
        <MuteButton isMuted={isMuted} setIsMuted={setIsMuted} />
      </div>
    </>
  );
};
