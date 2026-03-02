import React from 'react';

const Logo = ({ className = "w-auto h-8", color = "#ab2330", showText = true }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Stylized Glasses / Infinity Swoosh */}
        <path
          d="M20 50C20 40 30 35 40 35C50 35 50 65 60 65C70 65 80 60 80 50C80 40 70 35 60 35C50 35 50 65 40 65C30 65 20 60 20 50Z"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* The 'M' and 'J' integration */}
        <path
          d="M35 75V45L50 60L65 45V75"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-20"
        />
        <circle cx="35" cy="50" r="12" stroke={color} strokeWidth="4" />
        <circle cx="65" cy="50" r="12" stroke={color} strokeWidth="4" />
        <path
          d="M47 50H53"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      {showText && (
        <span className="font-mono font-bold tracking-tighter text-xl text-primary">
          MJ<span style={{ color }}>OPTICS</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
