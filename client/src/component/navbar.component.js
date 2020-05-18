import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
//import { Link } from "react-router-dom";
//import { history } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import auth from "./auth";

export default class Navbars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Toggle: false,
    };
  }

  ToggleButton() {
    this.setState((currentState) => ({
      Toggle: currentState.Toggle,
    }));
  }

  render() {
    return (
      <Navbar bg="success" expand="xl" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Question Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" sm-col-8 nav_a">
            <Nav.Link href="/home" className="active">
              Questions
            </Nav.Link>
            <Nav.Link href="/list" className="active">
              Edit Question
            </Nav.Link>
            <Nav.Link href="/create" className="active">
              Create Question
            </Nav.Link>
            <Nav.Link href="/" className="active">
              Sign Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
