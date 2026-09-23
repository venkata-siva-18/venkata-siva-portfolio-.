import React from 'react';

interface CircularTextProps {
  text: string;
  size?: number; // size in px
  radius?: number;
  className?: string;
  reverse?: boolean;
  speed?: 'normal' | 'slow' | 'fast';
  centerIcon?: React.ReactNode;
}

export const CircularText: React.FC<CircularTextProps> = ({
  text,
  size = 140,
  radius = 52,
  className = '',
  reverse = false,
  speed = 'slow',
  centerIcon
}) => {
  const characters = text.split('');
  const totalChars = characters.length;
  const degStep = 360 / totalChars;

  const getSpeedClass = () => {
    if (reverse) return 'animate-spin-reverse';
    return speed === 'fast' ? 'animate-spin' : 'animate-spin-slow';
  };

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* Outer ambient glow ring */}
      <div className="absolute inset-0 rounded-full bg-sky-500/10 blur-sm pointer-events-none" />

      {/* Decorative hairline inner and outer circular tracks */}
      <div className="absolute inset-2 rounded-full border border-slate-700/60 pointer-events-none" />
      <div className="absolute inset-5 rounded-full border border-sky-500/20 border-dashed pointer-events-none" />

      {/* Rotating Characters Container */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${getSpeedClass()}`}
        style={{ transformOrigin: 'center center' }}
      >
        {characters.map((char, i) => {
          const rotation = i * degStep;
          return (
            <span
              key={i}
              className="absolute text-[9px] sm:text-[10px] font-mono-code font-semibold uppercase tracking-widest text-slate-300"
              style={{
                transform: `rotate(${rotation}deg) translateY(-${radius}px)`,
                transformOrigin: '0 0',
              }}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* Center Icon or Core badge */}
      {centerIcon ? (
        <div className="relative z-10 w-11 h-11 rounded-full bg-slate-900 border border-slate-700/80 shadow-md flex items-center justify-center text-sky-400">
          {centerIcon}
        </div>
      ) : (
        <div className="relative z-10 w-11 h-11 rounded-full bg-slate-900 border border-sky-500/40 flex items-center justify-center shadow-md text-white font-mono-code text-xs font-bold">
          VS
        </div>
      )}
    </div>
  );
};
