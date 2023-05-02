'use client'

import { useState } from 'react'

export function Counter () {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={()=> setCount(state => state+1)}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={()=> setCount(state => state-1)}>Decrement</button>
    </div>
  )
}