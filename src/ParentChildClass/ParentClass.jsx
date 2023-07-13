import React, { Component } from 'react'
import ChildClass from './ChildClass'

export default class ParentClass extends Component {
    state ={ 
        firstname: 'naufal',
        lastname: 'firdaus'
    }
  render() {
    return (
      <div>
        <ChildClass
            first = {this.state.firstname}
            last = {this.state.lastname}
        />
      </div>
    )
  }
}
