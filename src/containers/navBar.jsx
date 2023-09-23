import React from 'react';
import './navBar.css';

function Navbar({ onChangeView }) {
    return (
        <div className="navbar">
            <div></div> {/* This is a placeholder div to maintain space between items */}
            <div className="auth-buttons">
                <button className="nav-btn" onClick={() => onChangeView('home')}>Home</button>
                <button className="nav-btn" onClick={() => onChangeView('about')}>About</button>
                <button className="nav-btn nav2" onClick={() => onChangeView('projects')}>Projects</button>
            </div>
        </div>
    );
}

export default Navbar;
