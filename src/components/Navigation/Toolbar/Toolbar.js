import React from 'react';
import Styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
    <header className={Styles.Toolbar}>
        <div>MENU</div>
        <div>LOGO</div>

        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;