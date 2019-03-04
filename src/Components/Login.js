import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import InstagramLogin from "react-instagram-login";
import GoogleLogin from "react-google-login";
import "bootstrap/dist/css/bootstrap.css";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            errors: {},
            users: [
                {
                    email: "test@gmail.com",
                    password: "TestTest@123",
                    phone: "123456789",
                    city: "Hyderabad",
                    country: "India",
                    name: "Test 1"
                },
                {
                    email: "test1@gmail.com",
                    password: "TestTest@123",
                    phone: "123456789",
                    city: "Hyderabad",
                    country: "India",
                    name: "Test 2"
                },
                {
                    email: "test2@gmail.com",
                    password: "TestTest@123",
                    phone: "123456789",
                    city: "Hyderabad",
                    country: "India",
                    name: "Test 3"
                },
                {
                    email: "test3@gmail.com",
                    password: "TestTest@123",
                    phone: "123456789",
                    city: "Hyderabad",
                    country: "India",
                    name: "Test 4"
                }
            ]
        };
    }
    componentWillMount() {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/client.js";
        script.async = true;
        document.body.appendChild(script);
        const script2 = document.createElement("script");
        script2.src =
            "http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js";
        script2.async = true;
        document.body.appendChild(script2);
        const script3 = document.createElement("script");
        script3.src =
            "https://apis.google.com/js/api.js";
        script3.async = true;
        document.body.appendChild(script3);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    submitloginForm = e => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;

        // stop here if form is invalid
        if (!(username && password) && !this.validateForm()) {
            return;
        }
        //fetch users through api
        let userdetails = this.state.users.map(
            u => u.email === username && u.password === password
        );
        if (userdetails != null) {
            localStorage.setItem("isAuthenticated", true);

            this.props.history.push({
                pathname: "/Dashboard",
                state: {
                    user: this.state.users.filter(
                        u => u.email === username && u.password === password
                    )
                }
            });
        }
    };

    validateForm = () => {
        //let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if (!this.state.username) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }
        if (typeof this.state.username !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(
                /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
            );
            if (!pattern.test(this.state.username)) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }
        if (!this.state.password) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }
        if (typeof this.state.password !== "undefined") {
            if (
                !this.state.password.match(
                    /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
                )
            ) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }
        //this.setState({      errors: errors    });
        return formIsValid;
    };

    responseFacebook = response => {
        console.log(response);
        if (response !== undefined) {
            this.pushDataToFacebook(response);
        }
    };
    pushDataToFacebook = response => {
        if (response !== undefined) {
            this.props.history.push({
                pathname: "/Facebook",
                fbData: response
            });
        }
    };

    render() {
        const responseGoogle = response => {

            var config = {
                'client_id': '942448994086-hjup9f33s70ditnb5vf81v4resdrea2t.apps.googleusercontent.com',
                'scope': 'https://www.google.com/m8/feeds'
            };
            var token = window.gapi.auth.getToken().access_token;
            console.log(token);
            window.gapi.auth.authorize(config, function () {
                fetch("https://www.google.com/m8/feeds/contacts/default/full?alt=json&access_token=" + token)
                    .then(response => {

                        console.log("responseGoogle: " + JSON.stringify(response));
                        if (!response.ok) {
                            throw Error("Network request failed");
                        }
                        if (response.ok) {
                        }
                        return response;
                    })
                    .then(d => d.json())
                    .then(
                        d => { console.log(d) },
                        (error) => { console.log("error: " + error) }
                    );
            });

            var profile = response.getBasicProfile();
            this.setState({ user: profile });
            // var auth_token =
            //     "ya29.GlvCBk1doAcYBIeEupVQ1Bcx6B93gefXJ1V1JciOn6vl7BwbzU0C7m6icW7bQ7kHM-4fUyA1_VyCZEpcLAT3Z5A4ZSVfaXnGn89SRu_MtnB_fGjUEkoxUhpo6Bz6";

            // var GoogleContactsUrl =
            //     "https://www.google.com/m8/feeds/contacts/" +
            //     profile.getEmail() +
            //     "/full?alt=json"
            // // + "&access_token=" +
            // // auth_token;
            // console.log(GoogleContactsUrl);
            window.gapi.auth.authorize(config, function () {
                fetch("https://www.google.com/m8/feeds/contacts/default/full?alt=json&access_token=" + token)
                    .then(response => {

                        console.log("responseGoogle: " + JSON.stringify(response));
                        if (!response.ok) {
                            throw Error("Network request failed");
                        }
                        if (response.ok) {
                        }
                        return response;
                    })
                    .then(d => d.json())
                    .then(
                        d => {

                            console.log(d)
                            pushToGoogleDashboard(d);
                        },
                        () => {
                            this.setState({
                                requestFailed: true
                            });
                        }
                    );
            });
        }
        const pushToGoogleDashboard = data => {
            this.props.history.push({
                pathname: "/Google",
                state: { contacts: data.feed, email: this.state.user.getEmail() }
            });
        };
        const errorResponseGoogle = response => {
            this.setState({ message: "Invalid Credentials" });
        };

        const url =
            "http://api.instagram.com/v1/users/self/media/recent/?access_token=";
        const responseInstagram = response => {
            console.log(JSON.stringify(response));
            console.log(url + response);
            fetch(url + response)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    pushToInstagram(data);
                })

                .catch(error => console.log(error));
        };
        const pushToInstagram = instaData => {
            this.props.history.push({
                pathname: "/Instagram",
                state: { userData: instaData }
            });
        };
        const responseErrorInstagram = response => {
            console.log("error: " + JSON.stringify(response));
        };
        const { username, password } = this.state;
        var isEnabled = this.validateForm();
        return (
            <div className="container" style={{ "margin": "70px" }}>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <form
                                    method="post"
                                    name="loginForm"
                                    onSubmit={this.submitloginForm}
                                    className="form-signin"
                                >
                                    <div className="form-label-group">
                                        <input
                                            type="text"
                                            name="username"
                                            value={username}
                                            onChange={this.handleChange.bind(this)}
                                            className="form-control"
                                        />
                                        <label htmlFor="inputEmail">Email address</label>
                                        <div className="errorMsg">
                                            {this.state.errors.emailid}
                                        </div>
                                    </div>

                                    <div className="form-label-group">
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={this.handleChange.bind(this)}
                                            className="form-control"
                                        />

                                        <label htmlFor="inputPassword">Password</label>
                                        <div className="errorMsg">
                                            {this.state.errors.password}
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-lg btn-primary btn-block text-uppercase"
                                        type="submit"
                                        disabled={!isEnabled}
                                    >
                                        Sign in
                    </button>
                                </form>
                                <div className="my-4">
                                    <GoogleLogin
                                        cssClass="btn btn-lg btn-facebook btn-block text-uppercase"
                                        style={{ "background-color": "#ea4335" }}
                                        clientId="942448994086-hjup9f33s70ditnb5vf81v4resdrea2t.apps.googleusercontent.com"
                                        buttonText="LOGIN WITH GOOGLE"
                                        onSuccess={responseGoogle}
                                        onFailure={errorResponseGoogle}
                                        scope="email profile openid https://www.google.com/m8/feeds/"
                                    />
                                    <FacebookLogin
                                        appId="401631383932460"
                                        fields="name,email,friends,picture"
                                        scope="public_profile,email,user_friends"
                                        callback={this.responseFacebook}
                                        cssClass="btn btn-lg btn-facebook btn-block text-uppercase"
                                        icon="fab fa-facebook-f mr-2"
                                    />
                                    <InstagramLogin
                                        clientId="01995d823f354deda41e0f2342c37aae"
                                        //clientId="b8bcba25d13c4440ba489d41fc127726"
                                        buttonText="Login With Instagram"
                                        onSuccess={responseInstagram}
                                        onFailure={responseErrorInstagram}
                                        implicitAuth={true}
                                        //scope="likes+comments+follower_list"
                                        scope="likes+comments+follower_list"
                                        cssClass="btn btn-lg btn-facebook btn-block text-uppercase"
                                        style={{ "background-color": "red" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
