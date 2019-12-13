import React from 'react';
import Header from '../header';
import Footer from '../footer';

import './templatePage.css';

const TemplatePage = props => (
    <div className="page">
        <div className="page__wrapper">
            <Header />
            <div className='site-width'>
                { props.children }
            </div>
        </div>
        <Footer />
    </div>
);

export default TemplatePage;