import React, { Component } from 'react'

export default class CustomFunction extends Component {
    Fullname(firstName,lastName){
        return firstName + ' ' + lastName
    }
  render() {
    const firstName = 'dian'
    const lastName = 'code.id'
    return (
      <div>
        <h1>Hello, {this.Fullname(firstName,lastName)}</h1>
      </div>
    )
  }
}
