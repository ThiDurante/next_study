import Link from 'next/link'

export default async function Home() {
  const reponse = await fetch('https://api.github.com/users/thidurante')
  const data = await reponse.json()
  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Link href="/dashboard">Dashboard</Link>

    </div>
  )
}