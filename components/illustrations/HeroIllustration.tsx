import React from 'react';

const HeroIllustration: React.FC = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgba(102, 187, 106, 0.4)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgba(76, 175, 80, 0.6)', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgba(46, 125, 50, 0.5)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgba(129, 199, 132, 0.3)', stopOpacity: 1 }} />
        </linearGradient>
        <style>
          {`
            @keyframes drift {
              0% { transform: translate(0, 0) rotate(0deg); }
              25% { transform: translate(10px, 20px) rotate(5deg); }
              50% { transform: translate(-10px, -5px) rotate(-3deg); }
              75% { transform: translate(5px, -15px) rotate(2deg); }
              100% { transform: translate(0, 0) rotate(0deg); }
            }
            .drifting {
              animation: drift 30s ease-in-out infinite;
            }
            .drifting-reverse {
                animation: drift 40s ease-in-out infinite reverse;
            }
          `}
        </style>
      </defs>
      <g className="drifting">
        <path d="M -100,50 C 150,200 300,-100 550,150 S 800,600 950,450 S 1300,200 1500,350 L 1500,800 L -100,800 Z" fill="url(#grad1)" />
      </g>
      <g className="drifting-reverse">
        <path d="M -100,600 C 200,750 450,500 700,650 S 1000,800 1150,700 S 1400,500 1600,600 L 1600, -50 L -100, -50 Z" fill="url(#grad2)" />
      </g>
    </svg>
  );
};

export default HeroIllustration;