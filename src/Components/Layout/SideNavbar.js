import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SideNavbar extends Component {
    state = {}
    render() {
        return (
            <div>
                <nav className="navigation" style={{ "marginTop": "105px" }}>
                    <ul className="menu">
                        <li>
                            <Link className="active" to="/">
                                <img src="https://img.icons8.com/color/20/000000/person-male.png"></img>
                                <span title="Login">Login</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Dashboard">
                                <img src="https://img.icons8.com/color/20/000000/details.png"></img>
                                <span title="Dashboard">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Facebook">
                                <img src="https://img.icons8.com/color/20/000000/facebook.png"></img>
                                <span title="Facebook">Facebook</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Google">
                                <img src="https://img.icons8.com/color/20/000000/google-logo.png"></img>
                                <span title="Google">Google</span>
                            </Link>
                        </li >
                        <li>
                            <Link to="/Instagram">
                                <img src="https://img.icons8.com/color/20/000000/instagram-new.png"></img>
                                <span title="Instagram">Instagram</span>
                            </Link>
                        </li >
                    </ul >
                </nav >
            </div >
        );
    }
}

export default SideNavbar;