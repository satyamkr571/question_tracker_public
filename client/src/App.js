import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import Login from "./component/login";
import Navbar from "./component/navbar.component";
import QuestionList from "./component/question-list";
import EditQuestion from "./component/edit-question";
import CreateQuestion from "./component/create-question";
import QuestionSearchHome from "./component/qusetion-search-home";
import { PrivateRoute } from "./component/private.route";
//import auth from "./component/auth";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar className="stcik-top" />
        <br />
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/home" component={QuestionSearchHome} />
          <PrivateRoute exact path="/list" component={QuestionList} />
          <PrivateRoute exact path="/edit/:id" component={EditQuestion} />
          <PrivateRoute exact path="/create" component={CreateQuestion} />
        </Switch>
      </Router>
    );
  }
}
