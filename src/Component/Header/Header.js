import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <h2 className="header-name">Friend List</h2>
            <nav><a href="/home">Home</a><a href="/timeline">News-Feed</a><a href="/more">More-Friends</a></nav>
        </div>
    );
};

export default Header;