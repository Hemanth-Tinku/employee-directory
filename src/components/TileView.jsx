import React from 'react';
import '../styles/TileView.css';

const TileView = ({ employees, onSelect }) => {
    return (
        <div className="tile-container">
            {employees.map((employee) => (
                <div key={employee.id} className="tile" onClick={() => onSelect(employee)}>
                    <h3>{employee.name}</h3>
                    <p>Email: {employee.email}</p>
                    <p>Phone: {employee.phone}</p>
                    <p>City: {employee.address.city}</p>
                    <div className="tile-options">
                        <button>Edit</button>
                        <button>Flag</button>
                        <button>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TileView;
