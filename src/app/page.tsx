import Link from 'next/link';
import { Repos } from './components/Repos';

// will refresh all fetches every 30 seconds, page level
export const revalidate = 30;

export default async function Home() {
  // this is a static request, its made on build time, one time only
  const reponse = await fetch('https://api.github.com/users/thidurante', {
    // to make a revalidate request, pass a second argument as a object on fetch
    // { next: {revalidate: time in seconds}}}
    next: { revalidate: 30 },
    // cache by default is force-cache, forces to always cache the request
    // making all users receive the same data
    cache: 'no-cache',
    // no-store makes it that every request is a new call on the api
    // makes possible to have different data for each user

  });
  const data = await reponse.json();


  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* @ts-expect-error  Async server component still not supported*/}
      <Repos />
      <Link href="/dashboard">Dashboard</Link>

    </div>
  );
}

// all components on next are server side
