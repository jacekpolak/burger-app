import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import css from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={css.NavigationItems}>
        <NavigationItem />
    </ul>
);

export default navigationItems;