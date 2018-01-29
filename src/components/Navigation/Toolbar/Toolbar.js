import React from 'react';
import css from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleMenu from '../ToggleMenu/ToggleMenu';

const toolbar = (props) => (
    <header className={css.Toolbar}>
        <ToggleMenu clicked={props.open}/>
        <div className={css.Logo}>
            <Logo/>
        </div>
        <nav className={css.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;