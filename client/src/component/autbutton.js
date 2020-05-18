import { Component } from "react";
import { Redirect } from "react-router-dom";
import auth from "./auth"

export default class AuthButton extends Component {
  constructor(props) {
    super(props);
  }
  AuthButton() {
    let history = useHistory();

    return auth.isAuthenticated ? (
        <Redirect
        to={{
          pathname: "/home",
          state: { from: props.location }
        }}
      />
        
    ) : (
        <Redirect
        to={{
          pathname: "/",
          state: { from: props.location }
        }}
      />
    );
  }
}
