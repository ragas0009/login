import React, { Component } from "react";
class Google extends Component {
    state = {};
    render() {
        const contacts = this.props.location.state.contacts;
        console.log(contacts);
        return (
            <div className="container" style={{ "margin": "70px" }}>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div className="col-md-6 col-md-offset-3">
                        <div>
                            <h2>Google Page</h2>
                            <h3>
                                {contacts.title.$t} registered with email{" "}
                                {this.props.location.state.email}
                            </h3>
                            {contacts.entry.map((e, index) => (
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <img src="https://img.icons8.com/plasticine/300/000000/contacts.png"></img>
                                        </div>
                                        <div class="flip-card-back">
                                            <div key={index}>
                                                <h1>{e.title.$t ? e.title.$t : "No Name"}</h1>
                                            </div>
                                            <div>
                                                {e.gd$phoneNumber ? (
                                                    e.gd$phoneNumber.map((phone, indexPhone) => (
                                                        <div>
                                                            <div key={indexPhone}><p>phone: {phone.$t}</p></div>
                                                        </div>
                                                    ))
                                                ) : (
                                                        <p></p>
                                                    )}
                                            </div>
                                            <div>
                                                {e.gd$email ? (
                                                    e.gd$email.map((email, indexEmail) => (
                                                        <div>
                                                            <div key={indexEmail}>
                                                                <p>email: {email.address}</p>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                        <p></p>
                                                    )}
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Google;