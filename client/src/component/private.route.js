import React from "react";
import { Route, Redirect } from "react-router-dom";
//import auth from "./auth";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  //console.log(auth.isAuthenticated());
  setTimeout(() => {
    localStorage.setItem("document", JSON.stringify(false));
  }, 7200000);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (JSON.parse(localStorage.getItem("document")) === true) {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/"} />;
        }
      }}
    />
  );
};
