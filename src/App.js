import React, { useState, useEffect } from 'react';
import HamburgerMenu from './components/HamburgerMenu';
import HorizontalMenu from './components/HorizontalMenu';
import GridView from './components/GridView';
import TileView from './components/TileView';
import ExpandedView from './components/ExpandedView';
import './App.css';

function App() {
  const [view, setView] = useState('tile');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    //public api
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Error fetching employee data:', error));
  }, []);

  const handleToggleView = () => {
    setView(view === 'grid' ? 'tile' : 'grid');
  };

  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
    setView('expanded');
  };

  const handleBackToTile = () => {
    setView('tile');
    setSelectedEmployee(null);
  };

  return (
    <div className="app">
      <header className="header">
        <HamburgerMenu />
        <HorizontalMenu />
        <button className="toggle-view-button" onClick={handleToggleView}>
          Switch to {view === 'grid' ? 'Tile' : 'Grid'} View
        </button>
      </header>

      <main className="main-content">
        {view === 'grid' && <GridView employees={employees} onSelect={handleSelectEmployee} />}
        {view === 'tile' && <TileView employees={employees} onSelect={handleSelectEmployee} />}
        {view === 'expanded' && (
          <ExpandedView employee={selectedEmployee} onBack={handleBackToTile} />
        )}
      </main>
    </div>
  );
}

export default App;
