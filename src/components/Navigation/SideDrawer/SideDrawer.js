import React from 'react';
import css from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Hoc from '../../../hoc/hoc';

const sideDrawer = (props) => {
    let attachedClasses = [css.SideDrawer, css.Close];
    if (props.open) {
        attachedClasses = [css.SideDrawer, css.Open];
    }
    // slides in and slides out
    return (
        <Hoc>
            <BackDrop show={props.open} close={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={css.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Hoc>
    );
};

export default sideDrawer;