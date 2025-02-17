import './MuteButton.css';

interface MuteButtonProps {
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
}

const MuteButton = ({ isMuted, setIsMuted }: MuteButtonProps) => {
  return (
    <button
      className="muteButton"
      onClick={() => setIsMuted(!isMuted)}
      aria-label={isMuted ? 'Unmute' : 'Mute'}
    >
      {isMuted ? '🔇' : '🔊'}
    </button>
  );
};

export default MuteButton;
