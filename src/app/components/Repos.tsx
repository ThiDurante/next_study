export async function Repos() {
  const response = await fetch('https://api.github.com/users/thidurante/repos')
  const data = await response.json()
  return (
    <div>
      <h1>Repos</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}