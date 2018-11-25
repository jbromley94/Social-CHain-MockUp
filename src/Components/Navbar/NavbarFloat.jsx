import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class FixdNavbar extends Component {
  render() {
    return <div>
        <div className="left dropdown">
          <button className="dropbtn">Content</button>
          <div className="dropdown-content-left">
            <Link to="/">Home</Link>
            <Link to="/vacancies">Vacancies</Link>
          </div>
        </div>
        <div className="right dropdown">
          <button className="dropbtn">Utilities</button>
          <div className="dropdown-content-right">
            <Link to="/admin">Admin</Link>
          </div>
        </div>
      </div>;
  }
}


export default FixdNavbar;
