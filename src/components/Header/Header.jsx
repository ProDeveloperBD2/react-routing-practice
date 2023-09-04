import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/countries">Countries</Link>
        </nav>
    );
};

export default Header;