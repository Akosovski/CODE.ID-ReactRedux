import React, { Component } from 'react'

export default class ChildClass extends Component {
  render() {
    return (
      <div>
        <h1>First Name : {this.props.first}</h1>
        <h1>Last Name : {this.props.last}</h1>
      </div>
    )
  }
}
