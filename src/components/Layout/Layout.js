import React from 'react';
import Hoc from '../../hoc/hoc';
import css from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Hoc>
        <Toolbar />
        <main className={css.Content}>
            {props.children}
        </main>
    </Hoc>
);

export default layout;