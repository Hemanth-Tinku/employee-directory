import React, { useState, useEffect } from 'react';
import '../styles/TileView.css';

const TileView = ({ employees = [], onSelect }) => {

    return (
        <div className="tile-container">
            {employees.map((employee) => (
                <div key={employee.id} className="tile" onClick={() => onSelect(employee)}>
                    <h3>{employee.name}</h3>
                    <p><strong>Email:</strong> {employee.email}</p>
                    <p><strong>Phone:</strong> {employee.phone}</p>
                    <p><strong>City:</strong> {employee.address.city}</p>
                    <div className="tile-options">
                        <button className="option-button">Edit</button>
                        <button className="option-button">Flag</button>
                        <button className="option-button">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TileView;
