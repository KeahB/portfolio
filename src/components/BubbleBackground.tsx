import React, { useMemo } from 'react';

const BubbleBackground = () => {
  const bubbles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      const size = Math.random() * 60 + 10; 
      const left = Math.random() * 100; 
      const duration = Math.random() * 15 + 10; 
      const delay = Math.random() * -20; 
      
      return {
        id: i,
        size,
        left,
        duration,
        delay,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <style>
        {`
          @keyframes floatBubble {
            0% {
              transform: translateY(100px) scale(0.8);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(-120vh) scale(1.2);
              opacity: 0;
            }
          }
        `}
      </style>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-tr from-orange-500/30 to-orange-400/5 backdrop-blur-[2px] border border-orange-500/20 shadow-[0_0_15px_rgba(255,140,40,0.2)]"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: `-100px`,
            animation: `floatBubble ${bubble.duration}s infinite linear`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;
