import type { MetaFunction } from '@remix-run/node';
import { Profile } from '@/pages/profile';

export const meta: MetaFunction = ({ matches }) => {
  const rootMeta = matches.find((m) => m.id === 'root')?.meta ?? [];
  const newTitle = { title: 'Profile - Nyaomaru' };

  return [newTitle, ...rootMeta.filter((tag) => !('title' in tag))];
};

export default function ProfileRoute() {
  return <Profile />;
}
