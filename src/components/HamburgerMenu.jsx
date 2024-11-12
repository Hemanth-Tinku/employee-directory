import React, { useState } from 'react';
import '../styles/HamburgerMenu';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

  return (
    <div className="hamburger-menu-container">
      <button className="hamburger-icon" onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <div className="sidebar">
          <ul className="menu-list">
            <li>Main Item 1</li>
            <li>Main Item 2</li>
            <li onClick={toggleSubmenu} className="has-submenu">
              Main Item 3 ▼
              {submenuOpen && (
                <ul className="submenu">
                  <li>Sub Item 1</li>
                  <li>Sub Item 2</li>
                </ul>
              )}
            </li>
            <li>Main Item 4</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;