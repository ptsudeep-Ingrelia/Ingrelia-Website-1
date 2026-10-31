import React from 'react';

interface LogoProps {
  variant?: 'light-bg' | 'dark-bg';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light-bg',
  size = 'md',
  showTagline = false,
  className = '',
}) => {
  const isDarkBg = variant === 'dark-bg';

  const logoHeight = {
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-10',
    lg: 'h-10 sm:h-12',
  }[size];

  if (!isDarkBg) {
    // Light background: Use the official company logo uploaded with this project
    return (
      <div className={`inline-flex flex-col select-none ${className}`}>
        <div className="flex items-center gap-2">
          <img
            src="/assets/aistudio/INGRELIA_Primary_Logo_High_Res__3_.jpg-1_0f0ce2d0.jpg"
            alt="INGRELIA Ingredients Pvt. Ltd."
            className={`${logoHeight} w-auto object-contain transition-transform duration-200 hover:scale-[1.02]`}
          />
        </div>
        {showTagline && (
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#009999] mt-0.5">
            Your Personal Care Ingredients Partner
          </span>
        )}
      </div>
    );
  }

  // Dark background (e.g. Footer): Render high-contrast crisp logo lockup matching official identity
  return (
    <div className={`inline-flex flex-col select-none ${className}`} aria-label="INGRELIA Ingredients Pvt. Ltd.">
      <div className="flex items-center">
        {/* Crisp vector recreation of the official INGRELIA wordmark */}
        <div className="flex items-center tracking-[0.28em] font-sans font-bold text-white text-xl sm:text-2xl leading-none">
          <span className="text-white">I</span>
          <span className="text-white ml-[0.28em]">N</span>
          <span className="text-white ml-[0.28em]">G</span>
          <span className="text-white ml-[0.28em]">R</span>
          
          {/* Distinctive 3-bar E with teal center bar */}
          <span className="inline-flex flex-col justify-center h-[17px] sm:h-[20px] w-4 sm:w-5 gap-[3px] ml-[0.28em] shrink-0">
            <span className="h-[2.5px] sm:h-[3px] w-full bg-white rounded-full"></span>
            <span className="h-[2.5px] sm:h-[3px] w-full bg-[#009999] rounded-full"></span>
            <span className="h-[2.5px] sm:h-[3px] w-full bg-white rounded-full"></span>
          </span>
          
          <span className="text-white ml-[0.28em]">L</span>
          <span className="text-white ml-[0.28em]">I</span>
          
          {/* Distinctive Chevron A matching the official INGRELIA logo geometry */}
          <span className="inline-flex items-center ml-[0.28em] shrink-0" title="A">
            <svg
              className="h-[18px] sm:h-[22px] w-[16px] sm:w-[19px]"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2.5 21.5L10 2.5L17.5 21.5"
                stroke="white"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 mt-2 text-[9px] uppercase tracking-[0.28em] text-slate-300 font-semibold">
        <span>INGREDIENTS PVT. LTD.</span>
      </div>
      
      {showTagline && (
        <span className="text-[10px] tracking-wider text-[#00b3b3] mt-1 font-medium">
          Your Personal Care Ingredients Partner
        </span>
      )}
    </div>
  );
};
