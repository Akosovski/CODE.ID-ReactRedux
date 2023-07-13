import React from 'react'

export default function Employeeinput(props) {
  return (
    <div>
      <form onSubmit={props.OnSubmit}>
        <div>
            <label>Name :</label>
            <input type='text' placeholder='Name' onChange={props.handleChange('Name')}></input>
        </div>
        <div>
            <label>Salary :</label>
            <input type='number' placeholder='Salary' onChange={props.handleChange('Salary')}></input>
        </div>
        <div>
            <button type='submit'>Simpan</button>
            <button onClick={() => props.setDisplay(false)}>cancel</button>
        </div>
      </form>
    </div>
  )
}
