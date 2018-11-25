import React, { Component } from "react";
import "./AdminVacancies.css";
import { Link } from "react-router-dom";


class AdminVacancies extends Component {
  render() {
    return <div className="AdVacs">
        <h1>Applications</h1>
        <ul>
          <li className="lisItem">
            <h2>Content Researcher</h2>
          <p className="totApps">Total Applications: 0</p>
          </li>
          <li className="lisItemEve">
            <h2>Junior Account Executive</h2>
            <Link to="/adminVacanciesJAE" className="totApps">
              Click to View Total Applications: 3
            </Link>
          </li>
          <li className="lisItem">
            <h2>Influencer Coordinator</h2>
          <p className="totApps">Total Applications: 0</p>
          </li>
          <li className="lisItemEve">
            <h2>Account Manager</h2>
          <p className="totApps">Total Applications: 0</p>
          </li>
          <li className="lisItem">
            <h2>Front-End Web Developer</h2>
          <p className="totApps">Total Applications: 0</p>
          </li>
          <li className="lisItemEve">
            <h2>Head Of New Business & Client Development</h2>
          <p className="totApps">Total Applications: 0</p>
          </li>
          <li className="lisItem">
            <h2>Partnership Sales Manager</h2>
          <p className="totApps">Total Applications: 0</p>
          </li>
          <li className="lisItemEve">
            <h2>Client Development Director</h2>
          <p className="totApps">Total Applications: 0</p>
          </li>
          <li className="lisItem">
            <h2>Speculative Application</h2>
          <p className="totApps">Total Applications: 0</p>
          </li>
        </ul>
      </div>;
  }
}

export default AdminVacancies;
