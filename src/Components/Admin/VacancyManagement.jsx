import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./VacancyManagement.css";

{/*  THERE ARE COMMENTS IN THIS CODE TO SHOW MY UNDERSTANDING OF WORKING WITH THE API*/ }

class VacancyManagement extends Component {
  render() {
    return (
      <div className="vacManage">
        <h1>Vacancy Management</h1>
        <h3>Use this page to add or remove vacancies</h3>
        <Link to="/addVacancy" className="addVac">Click here to add a new vacancy</Link>
        <ul>
          <li className="lisItem">
            <div className="vacToRemove">
              <h2 className="jobTitle">Content Researcher</h2>
              {/* Each remove button would be a call to the API to remove from database - code example below as comment */}
              <button className="Remover">Remove/Vacancy Filled</button>
            </div>
          </li>
          <li className="lisItemEve">
            <div className="vacToRemove">
              <h2 className="jobTitle">Junior Account Executive</h2>
              <button className="Remover">Remove/Vacancy Filled</button>
            </div>
          </li>
          <li className="lisItem">
            <div className="vacToRemove">
              <h2 className="jobTitle">Influencer Coordinator</h2>
              <button className="Remover">Remove/Vacancy Filled</button>
            </div>
          </li>
          <li className="lisItemEve">
            <div className="vacToRemove">
              <h2 className="jobTitle">Account Manager</h2>
              <button className="Remover">Remove/Vacancy Filled</button>
            </div>
          </li>
          <li className="lisItem">
            <div className="vacToRemove">
              <h2 className="jobTitle">Front-End Web Developer</h2>
              <button className="Remover">Remove/Vacancy Filled</button>
            </div>
          </li>
          <li className="lisItemEve">
            <div className="vacToRemove">
              <h2 className="jobTitle">
                Head Of New Business & Client Development
              </h2>
              <button className="Remover">Remove/Vacancy Filled</button>
            </div>
          </li>
          <li className="lisItem">
            <div className="vacToRemove">
              <h2 className="jobTitle">Partnership Sales Manager</h2>
              <button className="Remover">Remove/Vacancy Filled</button>
            </div>
          </li>
          <li className="lisItemEve">
            <div className="vacToRemove">
              <h2 className="jobTitle">Client Development Director</h2>
              <button className="Remover">Remove/Vacancy Filled</button>
            </div>
          </li>
          <li className="lisItem">
            <div className="vacToRemove">
              <h2 className="jobTitle">Speculative Application</h2>
              <button className="Remover">Remove/Vacancy Filled</button>
            </div>
          </li>
        </ul>
      </div>
    );

    {
      /* 
      const deleteJob = jobid => {
  return axios.delete(`${apiUrl}/Jobs/${jobid}`);
};

        handleDelete = id => {
    deleteJob(id).then(response => {
      this.setState({
        needToUpdate: true
      });
    });
  };
      */
    }
  }
}

export default VacancyManagement;
