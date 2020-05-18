import React, { Component } from "react";
import axios from "axios";
import "./login.css";
import auth from "./auth";
//import { Redirect } from "react-router-dom";
//import store from "store";
//import { useHistory } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.authkey = this.authkey.bind(this);

    this.state = {
      username: "",
      password: "",
      users: [],
      userid: [],
      passkey: [],
      noUserFound: "",
      logged_in_status: false,
      password_hidden: true,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  componentDidMount() {
    localStorage.setItem("document", JSON.stringify(false));
    // this.setState.logged_in_status = false;
    // auth.logout(() => {
    //   this.authenticated = false;
    // });
    //console.log(auth.isAuthenticated());

    axios.get("http://localhost:5000/user").then((response) => {
      this.setState({
        users: response.data.map((user) => user.username),
        userid: response.data.map((user) => user.userid),
        passkey: response.data.map((user) => user.password),
      });
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.username === "" && this.state.password === "") {
      window.alert("Username and Password can't be empty !!");
    } else if (this.state.username === "") {
      window.alert("Username can't be empty !!");
    } else if (this.state.password === "") {
      window.alert("Password can't be empty !!");
    } else {
      for (let i = 0; i < 11; i++) {
        if (this.state.users[i] === this.state.username) {
          this.setState({ noUserFound: "" });
          if (this.state.password === this.state.passkey[i]) {
            //window.alert("Lgin successful !!!");
            // auth.login(() => {
            //   this.props.history.push("/home");
            // });
            //this.setState({ logged_in_status: true });
            localStorage.setItem("document", JSON.stringify(true));
            auth.login(() => {
              this.authenticated = true;
              // console.log(auth.authenticated);
              // console.log(auth.isAuthenticated());
              this.props.history.push("/home");
            });

            break;
          } else {
            window.alert("Wrong Password !!!");

            break;
          }
        } else if (this.state.userid[i] === this.state.username) {
          this.setState({ noUserFound: "" });
          if (this.state.password === this.state.passkey[i]) {
            //this.setState.logged_in_status = true;
            //window.alert("Lgin successful !!!");
            // auth.login(() => {
            //   this.props.history.push("/home");
            // });
            this.setState({ logged_in_status: true });
            localStorage.setItem("document", JSON.stringify(true));
            auth.login(() => {
              this.authenticated = true;
              //this.props.history.push("/home");
              //return <Redirect to="/home" />;
            });

            //console.log(auth.authenticated);
            //console.log(auth.isAuthenticated());

            break;
          } else {
            window.alert("Wrong Password !!!");
            break;
          }
        } else {
          this.setState({ noUserFound: "true" });
        }
      }
    }
    if (this.state.noUserFound === "true") {
      this.setState({ noUserFound: "" });
      window.alert("You are not Authorised to Lgin");
    }
  };

  // authkey() {
  //   return this.logged_in_status;
  // }

  // window.authkey = auth.authenticated;

  //  AuthKey = React.createClass({
  //   render: function() {
  //     return (
  //       this.state.logged_in_status
  //     );
  //   },
  // });

  AuthKey = () => {
    return this.state.logged_in_status;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto ">
            <div className="card card-signin my-5 bg-light h-auto">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      placeholder="username"
                      required
                      autoFocus
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                    />
                    <label htmlFor="username">Username</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type={this.state.password_hidden ? "password" : "text"}
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                      value={this.state.password}
                      onChange={this.onChangePassword}
                    ></input>

                    <label htmlFor="inputPassword">Password</label>
                    {/* <span>
                      <button
                        style={{ float: "right", borderRadius: "50px" }}
                        onClick={
                          (this.handleClick = () => {
                            this.setState({ password_hidden: false });
                          })
                        }
                      >
                        <i className="fa fa-eye-slash i_eye-slash" />
                      </button>
                    </span> */}
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember password
                    </label>
                  </div>
                  <br></br>
                  <button
                    className="btn btn-success text-uppercase"
                    type="submit"
                    onClick={this.onSubmit}
                  >
                    Sign in
                  </button>
                  <br></br>
                  <br></br>

                  <div className="d-flex justify-content-center">
                    <a href="/">Forgot your password?</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
