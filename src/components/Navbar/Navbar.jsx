import React, {Component} from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeYuriy}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active}>Messeges</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/mussic" activeClassName={s.act}>Mussic</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.activejt}>Settings</NavLink>
        </div>
    </nav>
};

export default Navbar;