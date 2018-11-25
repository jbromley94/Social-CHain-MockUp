import React, { Component } from 'react';
import "./AddVacancy.css";

{/*  THERE ARE COMMENTS IN THIS CODE TO SHOW MY UNDERSTANDING OF WORKING WITH THE API*/ }

class AddVacancy extends Component {
  render() {
    return <div className="vacManage">
        <h1>Add Vacancy</h1>
      {/*I would gather all info from submission fields, make a call to the API to post the chosen vacancy - code example below as comment*/}
        <form>
          <div className="form-item">
            Job Role<br/><input id="jobRole" type="text" placeholder="E.g Web Developer" required="" />
          </div>
        <div className="form-item">
          Job Number<br/> <input id="jobNumber" type="text" placeholder="E.g 1234" required="" />
        </div>
          <div className="form-item">
            Vacancy End Date <br/>
            <input id="endDate" type="text" placeholder="E.g 01/02/2018" required="" />
          </div>
        <div className="form-item">
          Details of Role <br/>
          <textarea id="roleDetails" rows="5" placeholder="Information about this role" required="" />
        </div>
          <br />
          <button type="submit">Send</button>
        </form>
      </div>;

{
  /*
   const postNewVacancy = (vacancyNumber, data) => {
  return axios.get(`${apiUrl}/database/emailBase/${vacancyNumber}`, data);
}

postNewVacancy(this.state.vacancyNumber, sentText)
        .then(() => {
          this.setState({ newMsg: "", needToUpdate: true });
        })
        .catch(err => {
          this.setState({
            errorMSGS: err.response.data,
            errorCode: err.response.status
          });
        });

*/
}

  }
}

export default AddVacancy;