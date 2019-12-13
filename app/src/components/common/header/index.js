import React from 'react';
import logo from '../../../img/logo.png';
import './header.css';

const Header = props => (
    <header className='header'>
        <div className='header_wrapper site-width'>
            <img className='header__logo' src={ logo } alt='logo' />
            <h1 className='header__title'>HOME</h1>
            <h1 className='header__title'>ADD TODO</h1>
        </div>
    </header>
);

export default Header;