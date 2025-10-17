import React from 'react';

const Logo: React.FC<{ className?: string, light?: boolean }> = ({ className, light = false }) => {
  const textColor = light ? 'white' : 'black';
  return (
    <svg 
      className={className}
      viewBox="0 0 225 60" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sollu Logo"
    >
      {/* Abstract 'S' mark using two interlocking shapes */}
      <g transform="translate(0, 5)">
        <path 
            d="M40,25 C40,11.2,30.8,0,19.5,0 C8.2,0,0,11.2,0,25 C0,38.8,8.2,50,19.5,50" 
            fill="#4CAF50" /* sollu-primary */
        />
        <path 
            d="M10,25 C10,38.8,19.2,50,30.5,50 C41.8,50,50,38.8,50,25 C50,11.2,41.8,0,30.5,0" 
            fill="#66BB6A" /* sollu-accent */
        />
      </g>
      
      {/* Text logo */}
      <text x="60" y="42" fontFamily="Inter, sans-serif" fontSize="42" fontWeight="bold" fill={textColor}>
        SOLLU
      </text>
    </svg>
  );
};

export default Logo;