import React, { Component } from "react";
import "./Heading.css";
import NavBar from "../Navbar/NavbarFloat";
import { Link } from "react-router-dom";


class Heading extends Component {
  render() {
    return (
      <div>
        <Link to={`/`} > <button className="Title">SOCIAL CHAIN</button>
        </Link>
        <NavBar/>
      </div>
    );
  }
}


export default Heading;
