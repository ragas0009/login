import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            isAuthenticated: false
        };
    }
    componentDidMount() {
        this.setState({ user: this.props.location.state.user });
    }

    logout = () => {
        localStorage.removeItem("isAuthenticated");
        this.props.history.push({
            pathname: "/"
        });
    };
    render() {
        this.setState({ isAuthenticated: localStorage.getItem("isAuthenticated") })
        const { user, isAuthenticated } = this.state;

        return (
            <React.Fragment>
                <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    {!isAuthenticated ? <p>You are not Authorized to view this content</p> : <div>
                        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                            Company name
                    </a>
                        <ul class="navbar-nav px-3">
                            <li class="nav-item text-nowrap">
                                <Link
                                    to="/"
                                    class="nav-link"
                                    onClick={() => { localStorage.removeItem("isAuthenticated"); this.props.history.push('/') }}
                                >
                                    LogOut
              </Link>
                            </li>
                        </ul>
                    </div>
                    }
                </nav>
                {!isAuthenticated ? <p></p> :
                    <div class="container-fluid mt-40" style={{ marginTop: "40px" }}>
                        <div class="row">
                            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                                <div class="sidebar-sticky">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#">
                                                <span data-feather="home" />
                                                Dashboard <span class="sr-only">(current)</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span data-feather="file" />
                                                Orders
                    </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span data-feather="shopping-cart" />
                                                Products
                    </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span data-feather="users" />
                                                Customers
                    </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span data-feather="bar-chart-2" />
                                                Reports
                    </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span data-feather="layers" />
                                                Integrations
                    </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>

                            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                                <div className="col-md-6 col-md-offset-3">
                                    {user.map((u, index) => (
                                        <div key={index}>
                                            <p>{u.name}</p>
                                            <p>{u.email}</p>
                                            <p>{u.phone}</p>
                                            <p>{u.city}</p>
                                            <p>{u.country}</p>
                                        </div>
                                    ))}
                                </div>
                            </main>
                        </div>
                    </div>}
            </React.Fragment>
        );
    }
}

export default Dashboard;
