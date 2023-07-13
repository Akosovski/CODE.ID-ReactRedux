import React from 'react'
import {Outlet} from 'react-router-dom'

const navigate = [
    {name: 'Dashboard', href:'/', current: true},
    {name: 'Region Api', href:'/api', current:false},
    {name: 'Region Saga', href:'/saga', current:false}
]
export default function Dashboard() {
  return (
    <div>
      {navigate.map((item) => {
        return (
            <a key={item.name} href={item.href}>{item.name}</a>
        )
      })}
      <header>
        <h1>{navigate.name}</h1>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
