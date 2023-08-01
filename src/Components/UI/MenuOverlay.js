import React, { useState } from "react";
import "./MenuOverlay.css"; // Import the CSS file for the menu overlay styles

const MenuOverlay = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Services</a>
                <a href="/">Contact</a>
            </nav>
        </div>
    );
};

export default MenuOverlay;
