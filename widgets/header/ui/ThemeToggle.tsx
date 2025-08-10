import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className='text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors w-10 h-10 text-center justify-center items-center flex'
      aria-label='Toggle Theme'
    >
      {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
};
