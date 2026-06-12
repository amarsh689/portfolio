import React, { useEffect, useRef } from 'react';

const BackgroundAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Increase default volume for better audibility
    audio.volume = 0.12; // 12%

    // Attempt autoplay; many browsers block audible autoplay until user interacts.
    const tryPlay = () => {
      const p = audio.play();
      if (p !== undefined) {
        p.catch(() => {
          // play was blocked; we'll wait for a user gesture
        });
      }
    };

    tryPlay();

    // If autoplay is blocked, resume on first user gesture without showing UI
    const resumeOnGesture = () => {
      tryPlay();
      removeGestureListeners();
    };

    const removeGestureListeners = () => {
      document.removeEventListener('click', resumeOnGesture);
      document.removeEventListener('keydown', resumeOnGesture);
      document.removeEventListener('touchstart', resumeOnGesture);
    };

    document.addEventListener('click', resumeOnGesture, { once: true });
    document.addEventListener('keydown', resumeOnGesture, { once: true });
    document.addEventListener('touchstart', resumeOnGesture, { once: true });

    return () => removeGestureListeners();
  }, []);

  return (
    <audio
      ref={audioRef}
      src="https://cdn.pixabay.com/audio/2023/08/16/audio_4409385d79.mp3"
      loop
      preload="auto"
      aria-hidden
    />
  );
};

export default BackgroundAudio;
