import React from 'react';
import '../styles/ExpandedView.css';

const ExpandedView = ({ employee, onBack }) => {
  if (!employee) return null;

  return (
    <div className="expanded-view">
      <button className="back-button" onClick={onBack}>
        <i className="fas fa-arrow-left"></i> Back to View
      </button>
      <div className="employee-details">
        <h2>{employee.name}</h2>
        <p><strong>Username:</strong> {employee.username}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <p><strong>Website:</strong> {employee.website}</p>
        <p><strong>Company:</strong> {employee.company.name}</p>
        <p><strong>City:</strong> {employee.address.city}</p>
        <p><strong>Street:</strong> {employee.address.street}</p>
        <p><strong>Suite:</strong> {employee.address.suite}</p>
        <p><strong>Zipcode:</strong> {employee.address.zipcode}</p>
      </div>
    </div>
  );
};

export default ExpandedView;
