import type { MetaFunction } from '@remix-run/node';
import { Top } from '@/pages/top';

export const meta: MetaFunction = ({ matches }) => {
  const rootMeta = matches.find((m) => m.id === 'root')?.meta ?? [];
  const newTitle = { title: 'Top - Nyaomaru' };

  return [newTitle, ...rootMeta.filter((tag) => !('title' in tag))];
};

export default function TopRoute() {
  return (
    <div className='h-full flex items-center justify-center'>
      <Top />
    </div>
  );
}
