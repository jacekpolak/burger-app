import React, { Component } from 'react';
import Hoc from '../../hoc/hoc';
import css from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    
    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    render () {
        return (
            <Hoc>
                <Toolbar />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerCloseHandler} />
                <main className={css.Content}>
                    {this.props.children}
                </main>
            </Hoc>
        )
    }
};

export default Layout;