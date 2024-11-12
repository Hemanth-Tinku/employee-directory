import React from 'react';
import '../styles/TileView.css'; // Make sure to add the styles for the icons
import "@fortawesome/fontawesome-free/css/all.css";

const TileView = ({ employees = [], onSelect }) => {
    return (
        <div className="tile-container">
            {employees.map((employee) => (
                <div key={employee.id} className="tile" onClick={() => onSelect(employee)}>
                    <div className="tile-header">
                        <h3 className="tile-name">{employee.name}</h3>
                    </div>
                    <div>
                        <p className="tile-info"><strong>Email:</strong> {employee.email}</p>
                        <p className="tile-info"><strong>Phone:</strong> {employee.phone}</p>
                        <p className="tile-info"><strong>City:</strong> {employee.address.city}</p>
                    </div>
                    <div className="tile-actions">
                        <i className="fa fa-edit action-icon" title="Edit"></i>
                        <i className="fa fa-flag action-icon" title="Flag"></i>
                        <i className="fa fa-trash action-icon" title="Delete"></i>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TileView;
