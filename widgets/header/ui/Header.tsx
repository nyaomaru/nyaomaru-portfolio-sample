import { useState } from 'react';
import { Link, useSearchParams } from '@remix-run/react';
import { Button } from '@/shared/ui';
import { GitHubLink } from './GitHubLink';
import { MailTo } from './MailTo';
import { NavigationLinks } from './NavigationLinks';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [searchParams] = useSearchParams();
  const showSvg = searchParams.get('showSvg') === 'true';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Left: Logo + Links */}
          <div className='flex items-center space-x-8'>
            <Link to='/' className='flex items-center group space-x-2'>
              {/* Logo container */}
              <div className='relative w-[10rem] h-10'>
                {showSvg ? (
                  <img
                    src='/assets/nyaomaru.gif'
                    alt='Nyaomaru Dance'
                    className='absolute top-0 left-0 w-[10rem] h-10 block object-contain'
                  />
                ) : (
                  <>
                    <img
                      src='/assets/nyaomaru_logo_yoko1.png'
                      alt='Nyaomaru Logo Light'
                      className='absolute top-0 left-0 w-[10rem] h-10 block object-contain dark:hidden'
                    />
                    <img
                      src='/assets/nyaomaru_logo_yoko2.png'
                      alt='Nyaomaru Logo Dark'
                      className='absolute top-0 left-0 w-[10rem] h-10 hidden dark:block object-contain'
                    />
                  </>
                )}
                <span
                  className='absolute left-0 bottom-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full block'
                  aria-hidden='true'
                />
              </div>
            </Link>
            <NavigationLinks className='hidden sm:flex' />
          </div>
          {/* Hamburger for mobile */}
          <div className='flex items-center space-x-4 sm:hidden'>
            <Button
              variant='ghost'
              size='icon'
              aria-label='Open menu'
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg
                width='24'
                height='24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </Button>
          </div>
          {/* Right: GitHub + ThemeToggle */}
          <div className='hidden sm:flex items-center'>
            <MailTo />
            <GitHubLink />
            <ThemeToggle />
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className='sm:hidden mt-2 bg-white dark:bg-gray-900 rounded shadow p-4 flex flex-col space-y-4'>
            <NavigationLinks onNavigate={() => setMenuOpen(false)} />
            <div className='flex items-center space-x-4'>
              <MailTo />
              <GitHubLink />
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

Header.displayName = 'Header';

export { Header };
