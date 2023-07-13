import React, { useState } from 'react'

export default function CounterHook() {
    const [count,setCount] = useState(5)
  return (
    <div>
      <h1>Counter Hook : {count}</h1>
      <button onClick={()=>setCount(count + 1)}>+</button>
      <button onClick={()=>setCount(count - 1)}>-</button>
    </div>
  )
}
