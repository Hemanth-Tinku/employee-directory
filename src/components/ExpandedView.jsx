import React from 'react';
import '../styles/ExpandedView.css';

const ExpandedView = ({ employee, onBack }) => {
  if (!employee) return null;

  return (
    <div className="expanded-view">
      <button className="back-button" onClick={onBack}>Back to Tile View</button>
      <div className="employee-details">
        <h2>{employee.name}</h2>
        <p><strong>Position:</strong> {employee.position}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <p><strong>Location:</strong> {employee.location}</p>
      </div>
    </div>
  );
};

export default ExpandedView;
