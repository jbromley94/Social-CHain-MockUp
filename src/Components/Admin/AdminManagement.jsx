import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./AdminManagement.css";

{/*  THERE ARE COMMENTS IN THIS CODE TO SHOW MY UNDERSTANDING OF WORKING WITH THE API*/ }

class AdminManagement extends Component {
  render() {
    return <div className="AdminManager">
        <h1>Application Managment</h1>
        <div className="Options">
          <div className="ManageApplicants">
            <Link to="/adminVacancies" className="linkTo">
              Click to View Applications By Vacancy
            </Link>
          </div>
          <div className="AddRemVacancies">
            <Link to="/vacancyManagement" className="linkTo">
              Click to Add or Remove Vacancies
            </Link>
          </div>
        </div>
        {/* Here I would make a call to the API to search over the database, using the searchTerm, looping over each file*/}
        <div>
          Search CVs and Applications By Keywords
          <br />
          <input type="text" className="SearchBar" placeholder="Search By Keyword E.g 'Developer'" />
          <button type="submit">Submit</button>
        </div>
      </div>;

    {/*
     const searchFunc = word => {
  return axios.get(`${apiUrl}/searchWord/${word}`);
}

componentDidMount(){
  searchFunc()
  .then(response => {
    this.setState({
      resultOfSearch: response.data.search_results
    });
  })
  .catch(err => {
    this.setState({
          errorMSGS: err.response.data,
          errorCode: err.response.status
        });
  })
}
*/}

  }
}

export default AdminManagement;