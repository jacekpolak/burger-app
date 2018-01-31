import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import css from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={css.NavigationItems}>
        <NavigationItem link="/">
            Builder
        </NavigationItem>
        <NavigationItem link="/checkout">
            Checkout
        </NavigationItem>
    </ul>
);

export default navigationItems;