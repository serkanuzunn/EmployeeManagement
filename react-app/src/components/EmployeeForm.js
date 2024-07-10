import React, { useState } from 'react';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { name, age: parseInt(age), department };

    fetch('https://localhost:44376/api/employee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not working');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        setName('');
        setAge('');
        setDepartment('');
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label>Department:</label>
        <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
