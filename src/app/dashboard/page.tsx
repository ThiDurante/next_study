import Link from 'next/link'

export const metadata = {
  title: 'Dashboard'
}

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/">Home</Link>
    </div>
  )
}