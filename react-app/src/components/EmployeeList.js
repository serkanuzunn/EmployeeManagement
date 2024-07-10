import React, { useEffect, useState } from 'react';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('https://localhost:44376/api/employee')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not working');
        }
        return response.json();
      })
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      {employees.length > 0 ? (
        <ul>
          {employees.map(employee => (
            <li key={employee.id}>
              {employee.name} - {employee.age} - {employee.department}
            </li>
          ))}
        </ul>
      ) : (
        <p>No employees found</p>
      )}
    </div>
  );
};

export default EmployeeList;
