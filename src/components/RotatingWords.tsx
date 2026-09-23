import React, { useState, useEffect } from 'react';

interface RotatingWordsProps {
  words: string[];
  intervalMs?: number;
  className?: string;
}

export const RotatingWords: React.FC<RotatingWordsProps> = ({
  words,
  intervalMs = 2600,
  className = ''
}) => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 350);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [words.length, intervalMs]);

  const currentWord = words[index];

  return (
    <span className={`inline-block relative overflow-hidden align-baseline ${className}`}>
      <span
        className={`inline-block font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 transition-all duration-300 transform ${
          animating
            ? '-translate-y-full opacity-0 scale-95'
            : 'translate-y-0 opacity-100 scale-100'
        }`}
      >
        {currentWord}
      </span>
    </span>
  );
};
