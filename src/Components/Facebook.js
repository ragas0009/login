import React, { Component } from "react";
class Facebook extends Component {
    state = {};
    render() {
        const user = this.props.location.fbData;
        console.log(user);
        return (
            <div class="container-fluid mt-40" style={{ marginTop: "40px" }}>
                <div class="row">
                    <div className="container" style={{ "margin": "70px" }}>
                        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={user.picture.data.url} height="300" width="300"></img>
                                        </div>
                                        <div className="flip-card-back">
                                            <ul>
                                                <li>{user.name}</li>
                                                <li>{user.email}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default Facebook;