import { useState, useEffect } from 'react';
import { UI } from '../../constants';

/**
 * Determines if the current viewport is considered mobile based on screen width.
 *
 * @returns `true` if running in browser with viewport width < 640px, `false` otherwise
 */
export const isMobile =
  typeof window !== 'undefined' && window.innerWidth < UI.MOBILE_BREAKPOINT;

/**
 * Hook for responsive mobile detection that updates on window resize.
 *
 * @returns `true` if current viewport width is less than mobile breakpoint, `false` otherwise
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < UI.MOBILE_BREAKPOINT
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setIsMobile(window.innerWidth < UI.MOBILE_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};
