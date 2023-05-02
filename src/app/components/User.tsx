import { cookies, headers } from 'next/dist/client/components/headers';

export async function generateMetadata({ params }) {
  return {
    title: `Product ${params.id}`,
  }
}

export async function User() {
  // this is a static request, its made on build time, one time only
  const reponse = await fetch('https://api.github.com/users/thidurante', {
    // to make a revalidate request, pass a second argument as a object on fetch
    // { next: {revalidate: time in seconds}}}
    next: { revalidate: 600 },
    // cache by default is force-cache, forces to always cache the request
    // making all users receive the same data
    cache: 'no-cache',
    // no-store makes it that every request is a new call on the api
    // makes possible to have different data for each user

  });
  const data = await reponse.json();

  // access to cookies and headers
  const userCookies = cookies();
  const userHeaders = headers();

  return (
    <div>
      <h1>User</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(userCookies, null, 2)}</pre>
      <pre>{JSON.stringify(userHeaders, null, 2)}</pre>
    </div>
  );
}