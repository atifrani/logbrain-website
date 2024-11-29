import React from 'react';

export function AiBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("https://cdn.dribbble.com/users/1186261/screenshots/3718681/media/1df1628eb3a46426e8b5c9b6cd76ab30.gif")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white" />
    </div>
  );
}