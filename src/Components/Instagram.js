import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
class Instagram extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    render() {
        const instaData = this.props.location.state.userData.data;
        console.log("insjs");
        console.log(instaData);
        return (
            <React.Fragment>
                <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                        Company name
                    </a>
                    <ul class="navbar-nav px-3">
                        <li class="nav-item text-nowrap">
                            <Link
                                to="/"
                                class="nav-link"
                                onClick={() => localStorage.removeItem("isAuthenticated")}
                            >
                                LogOut
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div class="container-fluid mt-40" style={{ marginTop: "40px" }}>
                    <div class="row">
                        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                            <div class="sidebar-sticky">
                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">
                                            <span data-feather="home" />
                                            Dashboard
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <span data-feather="file" />
                                            Instagram <span class="sr-only">(current)</span>
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
                                {instaData.map((u, index) => (
                                    <div key={index}>
                                        <p>
                                            {u.caption === null ? (
                                                <p>Test</p>
                                            ) : (
                                                    <p> {u.caption.text} </p>
                                                )}
                                        </p>
                                        <p>
                                            <img src={u.images.thumbnail.url} />
                                        </p>
                                        <p>Links:{u.likes.count}</p>
                                    </div>
                                ))}
                            </div>
                        </main>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Instagram;
