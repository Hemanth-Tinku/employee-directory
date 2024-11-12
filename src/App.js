import React, { useState } from 'react';
import HamburgerMenu from './components/HamburgerMenu';
import HorizontalMenu from './components/HorizontalMenu';
import GridView from './components/GridView';
import TileView from './components/TileView';
import ExpandedView from './components/ExpandedView';
import './App.css';

function App() {
  const [view, setView] = useState('grid'); 
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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
        {view === 'grid' && <GridView onSelect={handleSelectEmployee} />}
        {view === 'tile' && <TileView onSelect={handleSelectEmployee} />}
        {view === 'expanded' && (
          <ExpandedView employee={selectedEmployee} onBack={handleBackToTile} />
        )}
      </main>
    </div>
  );
}

export default App;
