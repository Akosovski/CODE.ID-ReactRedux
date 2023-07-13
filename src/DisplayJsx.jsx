import React, { useState } from "react";
import Employeeinput from "./Employeeinput";

export default function DisplayJsx() {
  const employees = [
    { EmpId: 1, Name: "naufal", Salary: 5000 },
    { EmpId: 2, Name: "firdaus", Salary: 4000 },
    { EmpId: 3, Name: "dian", Salary: 6000 },
  ];
  const [employee, setEmployee] = useState(employees);
  const [value, setValue] = useState({
    Name: undefined,
    Salary: 0,
  });
  const [display, setDisplay] = useState(false);
  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setEmployee([
      ...employee,
      {
        EmpId: employee.length + 1,
        Name: value.Name,
        Salary: value.Salary,
      },
    ]);
    setDisplay(false);
  };
  return (
    <div>
      <h1>List Employee</h1>
      <button onClick={() => setDisplay(true)}>Add employee</button>
      <ul>
        {display ? (
          <Employeeinput 
          OnSubmit = {onSubmit}
          handleChange = {handleChange}
          setDisplay = {setDisplay}/>
        ) : (
          (employee || []).map((emp) => {
            return (
              <li key={emp.EmpId}>
                <p>Emp Id = {emp.EmpId}</p>
                <p>Name = {emp.Name}</p>
                <p>Salary = {emp.Salary}</p>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
