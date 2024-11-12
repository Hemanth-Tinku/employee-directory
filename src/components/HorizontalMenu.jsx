import React from 'react';
import '../styles/HorizontalMenu.css';

const HorizontalMenu = () => {
    return (
        <nav className="horizontal-menu">
            <ul className="menu-list">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default HorizontalMenu;
