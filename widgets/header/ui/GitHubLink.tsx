import { FaGithub } from 'react-icons/fa';

export const GitHubLink = () => (
  <a
    href='https://github.com/nyaomaru'
    target='_blank'
    rel='noopener noreferrer'
    className='text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors w-10 h-10 text-center justify-center items-center flex'
    aria-label='GitHub'
  >
    <FaGithub size={20} />
  </a>
);
