import React from 'react'

export default function ChildFunction(props) {
  return (
    <div>
      <h1>First Name : {props.Firstname}</h1>
      <h1>Last Name : {props.Lastname}</h1>
    </div>
  )
}
