import Link from 'next/link';
import { Repos } from './components/Repos';
import { User } from './components/User';
import { Suspense } from 'react';
import { Counter } from './components/Counter';
// import { useRouter } from 'next/navigation';

export const metadata = {
  title: {
    default: 'Next13 Study',
    template: '%s | Next13 Study',
  }
}


export default async function Home() {
  // const router = useRouter()
  // router.push('/dashboard')

  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Counter />
      <Suspense fallback={<p>Loading User...</p>}>
      {/* @ts-expect-error  Async server component still not supported*/}
      <User />
      </Suspense>
      {/* @ts-expect-error  Async server component still not supported*/}
      <Repos />

    </div>
  );
}

// all components on next are server side
