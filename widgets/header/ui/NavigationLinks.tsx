import type { FC } from 'react';
import { Link } from '@remix-run/react';
import { navigationItems } from '../model/navigation';

/**
 * Props for the NavigationLinks component
 */
type NavigationLinksProps = {
  /** Optional callback function triggered when a navigation link is clicked */
  onNavigate?: () => void;
  /** Optional CSS class name to apply to the navigation container */
  className?: string;
};

const NavigationLinks: FC<NavigationLinksProps> = ({
  onNavigate,
  className = '',
}) => (
  <div className={`space-x-6 ${className}`.trim()}>
    {navigationItems.map((item) => (
      <Link
        key={item.to}
        to={item.to}
        className='text-sm font-medium text-gray-900 dark:text-white hover:underline'
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    ))}
  </div>
);
NavigationLinks.displayName = 'NavigationLinks';

export { NavigationLinks };
