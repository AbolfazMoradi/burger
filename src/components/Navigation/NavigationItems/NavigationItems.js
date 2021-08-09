import React from 'react';
import Styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem';

const navigationItems = () => {
    return(
        <ul className={Styles.NavigationItems}>
            <li><a href="/">A link</a></li>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    );
}

export default navigationItems;