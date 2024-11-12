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
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <p><strong>City:</strong> {employee.address.city}</p>
        <p><strong>Website:</strong> {employee.website}</p>
      </div>
    </div>
  );
};

export default ExpandedView;
