import React, { Component } from 'react';
import Header from './Header';
import SideNavbar from './SideNavbar';
class Layout extends Component {
    state = {}
    render() {
        return (
            <div>

                {this.props.children}
            </div>
        );
    }
}

export default Layout;