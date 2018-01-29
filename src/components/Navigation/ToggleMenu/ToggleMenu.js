import React from 'react';
import css from './ToggleMenu.css';

const toggleMenu = (props) => (
    <div className={css.ToggleMenu} onClick={props.clicked}>
        <div className={css.Hamburger}>
            <span></span>
        </div>
    </div>
);

export default toggleMenu;