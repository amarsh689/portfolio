import React, { useEffect, useRef, useState } from 'react';

const BackgroundAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.2;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => setHasError(true);
    const tryPlay = () => {
      setHasError(false);
      void audio.play().catch(() => undefined);
    };
    const resumeOnGesture = () => {
      tryPlay();
      removeGestureListeners();
    };
    const removeGestureListeners = () => {
      document.removeEventListener('click', resumeOnGesture);
      document.removeEventListener('keydown', resumeOnGesture);
      document.removeEventListener('touchstart', resumeOnGesture);
    };

    tryPlay();
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);
    document.addEventListener('click', resumeOnGesture, { once: true });
    document.addEventListener('keydown', resumeOnGesture, { once: true });
    document.addEventListener('touchstart', resumeOnGesture, { once: true });

    return () => {
      removeGestureListeners();
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      setHasError(false);
      void audio.play().catch(() => setHasError(true));
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/audio/videoplayback.weba`} loop preload="auto" />
      <button className="audio-toggle" type="button" onClick={toggleAudio} aria-label={isPlaying ? 'Pause background audio' : 'Play background audio'}>
        {hasError ? 'AUDIO UNAVAILABLE' : isPlaying ? 'PAUSE AUDIO' : 'PLAY AUDIO'}
      </button>
    </>
  );
};

export default BackgroundAudio;
