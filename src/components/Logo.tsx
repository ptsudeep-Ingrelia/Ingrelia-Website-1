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

  // Responsive height scale for razor-sharp rendering of the bolder official INGRELIA logo
  const logoHeight = {
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-9.5',
    lg: 'h-9 sm:h-11',
  }[size];

  const logoSrc = isDarkBg
    ? '/assets/images/ingrelia_logo_dark_highres.png'
    : '/assets/images/ingrelia_logo_light_highres.png';

  return (
    <div className={`inline-flex flex-col select-none ${className}`} aria-label="INGRELIA">
      <div className="flex items-center">
        <img
          src={logoSrc}
          alt="INGRELIA"
          className={`${logoHeight} w-auto object-contain transition-transform duration-200 hover:scale-[1.02]`}
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
