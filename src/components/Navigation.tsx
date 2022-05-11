import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const toggleNav = () => {
        const nav = document.getElementById('navigation');
        const btnOpen = document.getElementById('btn-open');
        nav?.classList.toggle('is-open');
        btnOpen?.classList.toggle('is-open');
    }

    return (
        <div>
            <i className='bx bx-menu navigation-button' id="btn-open" onClick={toggleNav}></i>
            <div className='navigation' id="navigation">
                <i className='bx bx-x navigation-close' onClick={toggleNav}></i>
                <ul>
                    <NavLink to="/">
                        <li onClick={toggleNav}>Home</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;