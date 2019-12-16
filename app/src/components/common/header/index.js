import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.png';
import './header.css';

const Header = props => (
    <header className='header'>
        <div className='header_wrapper site-width'>
            <img className='header__logo' src={ logo } alt='logo' />
            <h1 className='header__title'><Link to="/">HOME</Link></h1>
            <h1 className='header__title'><Link to="/addtodo">ADD TODO</Link></h1>
        </div>
    </header>
);

export default Header;