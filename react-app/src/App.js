import React from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Management</h1>
        <EmployeeForm />
        <EmployeeList />
      </header>
    </div>
  );
}

export default App;
