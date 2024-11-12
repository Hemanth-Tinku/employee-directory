import React from 'react';
import '../styles/GridView.css';

const GridView = ({ employees }) => {

  return (
    <div className="grid-container">
      <div className="grid-header">
        <span>Name</span>
        <span>Email</span>
        <span>Username</span>
        <span>Phone</span>
        <span>Website</span>
        <span>Company</span>
        <span>City</span>
        <span>Street</span>
        <span>Suite</span>
        <span>Zipcode</span>
      </div>
      {employees.map((employee) => (
        <div key={employee.id} className="grid-row">
          <span>{employee.name}</span>
          <span>{employee.email}</span>
          <span>{employee.username}</span>
          <span>{employee.phone}</span>
          <span>{employee.website}</span>
          <span>{employee.company.name}</span>
          <span>{employee.address.city}</span>
          <span>{employee.address.street}</span>
          <span>{employee.address.suite}</span>
          <span>{employee.address.zipcode}</span>
        </div>
      ))}
    </div>
  );
}

export default GridView;
