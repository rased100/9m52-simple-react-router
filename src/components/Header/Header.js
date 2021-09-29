import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const style = {
        fontWeight: "bold",
        color: "red"
    };
    return (
        <nav>
            <NavLink activeStyle={style} to="/home">Home</NavLink>
            <NavLink activeStyle={style} to="/friends">Friends</NavLink>
            <NavLink activeStyle={style} to="/about">About</NavLink>
            <NavLink activeStyle={style} to="/about/culture">Culture</NavLink>
        </nav>
    );
};

export default Header;