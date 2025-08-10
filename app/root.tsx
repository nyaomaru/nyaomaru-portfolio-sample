import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Header } from '@/widgets/header';
import { Toaster } from '@/shared/ui';
import tailwindStyles from './tailwind.css?url';
import './globals.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
];

export const meta: MetaFunction = () => {
  const title = 'Nyaomaru Portfolio';
  const description =
    'Portfolio of Nyaomaru – A frontend engineer specializing in Vue, React, and TypeScript.';
  const image =
    'https://portfolio-nyaomaru.vercel.app/assets/nyaomaru_logo_yoko1.png';
  const url = 'https://portfolio-nyaomaru.vercel.app';

  return [
    { title },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
  ];
};

export default function App() {
  return (
    <html lang='en' className='h-full'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
        <link
          href='//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css'
          rel='stylesheet'
          type='text/css'
        />
        <link
          href='//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic'
          rel='stylesheet'
          type='text/css'
        />
      </head>
      <body className='h-full m-0 p-0'>
        <Header />
        <main className='h-[calc(100vh-4rem)]'>
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <Toaster />
      </body>
    </html>
  );
}
