import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    state = {}
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav" style={{ "backgroundColor": "#535466", "color": "#ffffff" }}>
                    <div className="breadcrumb-dn mr-auto">
                        <p>React App - An App for Social Login</p>
                    </div>
                    <ul className="nav navbar-nav nav-flex-icons ml-auto">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link waves-effect waves-light" style={{ "color": "#F1F1F1" }}
                                onClick={() => { localStorage.removeItem("isAuthenticated"); this.props.history.push('/') }}
                            >
                                <span className="clearfix d-none d-sm-inline-block"><img src="https://img.icons8.com/color/20/000000/shutdown.png"></img> Log Out</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div >
        );
    }
}

export default Header;