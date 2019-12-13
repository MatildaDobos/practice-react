import React from 'react';
import logo from '../../../img/logo.png';

import './footer.css';

const Footer = props => (
    <footer className='footer'>
        <div className='footer__wrapper site-width'>
            <p className='footer_title'>With love from React</p>
            <img className='footer__logo' src={ logo } alt='logo' />
        </div>
    </footer>
);


export default Footer;