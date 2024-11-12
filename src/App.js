import React from 'react';
import HamburgerMenu from './components/HamburgerMenu';
import HorizontalMenu from './components/HorizontalMenu';
import GridView from './components/GridView';
import TileView from './components/TileView';
import ExpandedView from './components/ExpandedView';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <HamburgerMenu />
        <HorizontalMenu />
      </header>
      <main className="main-content">
        <GridView />
        <TileView />
        <ExpandedView />
      </main>
    </div>
  );
}

export default App;
