import type { MetaFunction } from '@remix-run/node';
import { Articles } from '@/pages/articles';

export const meta: MetaFunction = ({ matches }) => {
  const rootMeta = matches.find((m) => m.id === 'root')?.meta ?? [];
  const newTitle = { title: 'Articles - Nyaomaru' };

  return [newTitle, ...rootMeta.filter((tag) => !('title' in tag))];
};

export default function ArticlesRoute() {
  return <Articles />;
}
