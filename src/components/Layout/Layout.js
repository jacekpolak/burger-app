import React from 'react';
import Hoc from '../../hoc/hoc';
import css from './Layout.css';

const layout = (props) => (
    <Hoc>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main className={css.Layout}>
            {props.children}
        </main>
    </Hoc>
);

export default layout;