import * as React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss'; 

const activeStyle = { color: "#F15B2A" };

export const Header = () => { return (
<div className="header">
    <nav className="navbar">
        <NavLink className="link" to="/"
        activeStyle={activeStyle}  exact>שיבוץ תורנויות</NavLink>
    </nav>
</div>)
};