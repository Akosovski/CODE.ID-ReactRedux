import React, { Component } from 'react'

export default class Counter1 extends Component {
    state = {counter: 1}
    increment=()=>{
        this.setState({counter: this.state.counter + 1})
    }
    decrement=()=>{
        this.setState({counter: this.state.counter - 1})
    }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
