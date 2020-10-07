import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" id="navbar">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
