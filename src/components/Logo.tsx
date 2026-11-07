import React, { useState } from 'react';

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
  const [imgError, setImgError] = useState(false);

  // Responsive height scale matching website standards for wide wordmarks (~9:1 aspect ratio)
  const logoHeight = {
    sm: 'h-4.5 sm:h-5',
    md: 'h-5 sm:h-6',
    lg: 'h-7 sm:h-8',
  }[size];

  const primaryLogoSrc = isDarkBg
    ? '/assets/images/ingrelia_logo_dark_highres.png'
    : '/assets/images/ingrelia_logo_light_highres.png';

  const logoSrc = imgError
    ? '/assets/images/ingrelia_logo_light_highres.png'
    : primaryLogoSrc;

  return (
    <div className={`inline-flex flex-col select-none ${className}`} aria-label="INGRELIA">
      <div className="flex items-center">
        <img
          src={logoSrc}
          alt="INGRELIA"
          loading="eager"
          decoding="async"
          onError={() => {
            if (!imgError) setImgError(true);
          }}
          className={`${logoHeight} w-auto object-contain transition-transform duration-200 hover:scale-[1.02] ${
            imgError && isDarkBg ? 'brightness-0 invert' : ''
          }`}
        />
      </div>

      {showTagline && (
        <span
          className={`text-[10px] tracking-[0.18em] uppercase font-semibold mt-1 ${
            isDarkBg ? 'text-[#00b3b3]' : 'text-[#009999]'
          }`}
        >
          Ingredients that inspire better formulations
        </span>
      )}
    </div>
  );
};
