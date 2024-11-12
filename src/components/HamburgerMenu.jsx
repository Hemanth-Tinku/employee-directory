import React, { useState } from 'react';
import '../styles/HamburgerMenu.css';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleSubmenu = () => setSubmenuOpen(!submenuOpen);

    return (
        <div className="hamburger-menu-container">
            <button className="hamburger-icon" onClick={toggleMenu}>
                ☰
            </button>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleMenu}>
                    &times;
                </button>
                <ul className="menu-list">
                    <li>Main Item 1</li>
                    <li>Main Item 2</li>
                    <li onClick={toggleSubmenu} className="has-submenu">
                        Main Item 3 ▼
                        <ul className={`submenu ${submenuOpen ? 'open' : ''}`}>
                            <li>Sub Item 1</li>
                            <li>Sub Item 2</li>
                        </ul>
                    </li>
                    <li>Main Item 4</li>
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;
