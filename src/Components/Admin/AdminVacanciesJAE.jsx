import React, { Component } from "react";
import "./AdminVacanciesJAE.css";

class AdminVacanciesJAE extends Component {
  render() {
    return <div className="onlyApplication">
        <h1>Junior Account Executive</h1>
        <ul>
          <li className="lisItem">
            <h2>John Smith</h2>
            <div>
              <input type="radio" id="notYetRem" name="drone" value="not yet reviewed" />
              <label for="not yet reviewed">Not yet reviewed</label>

              <input type="radio" id="rejected" name="drone" value="rejected" />
              <label for="rejected">Rejected</label>

              <input type="radio" id="interviewStage" name="drone" value="interviewStage" />
              <label for="interviewStage">Interview Stage</label>

              <input type="radio" id="examination" name="drone" value="examination" />
              <label for="examination">Examination Stage</label>
              <br />
              <input type="radio" id="confirmed" name="drone" value="confirmed" />
              <label for="confirmed">Confirmed/Callback</label>

              <div className="vacDropdown">
                <button className="vacDropbtn applicantBut">Hover to View CV</button>
                <div className="vacDropdown-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="lisItemEve">
            <h2>Jackie Collins</h2>
            <div>
              <input type="radio" id="notYetRem" name="drone" value="not yet reviewed" />
              <label for="not yet reviewed">Not yet reviewed</label>

              <input type="radio" id="rejected" name="drone" value="rejected" />
              <label for="rejected">Rejected</label>

              <input type="radio" id="interviewStage" name="drone" value="interviewStage" />
              <label for="interviewStage">Interview Stage</label>

              <input type="radio" id="examination" name="drone" value="examination" />
              <label for="examination">Examination Stage</label>
              <br />
              <input type="radio" id="confirmed" name="drone" value="confirmed" />

              <label for="confirmed">Confirmed/Callback</label>
              <div className="vacDropdown">
                <button className="vacDropbtn colBut applicantBut">
                  Hover to View CV
                </button>
                <div className="vacDropdown-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="lisItem">
            <h2>Andrew Wilson</h2>
            <div>
              <input type="radio" id="notYetRem" name="drone" value="not yet reviewed" />
              <label for="not yet reviewed">Not yet reviewed</label>
              <input type="radio" id="rejected" name="drone" value="rejected" />
              <label for="rejected">Rejected</label>

              <input type="radio" id="interviewStage" name="drone" value="interviewStage" />
              <label for="interviewStage">Interview Stage</label>

              <input type="radio" id="examination" name="drone" value="examination" />
              <label for="examination">Examination Stage</label>
              <br />

              <input type="radio" id="confirmed" name="drone" value="confirmed" />
              <label for="confirmed">Confirmed/Callback</label>
              <div className="vacDropdown">
                <button className="vacDropbtn applicantBut">Hover to View CV</button>
                <div className="vacDropdown-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>;
  }
}

export default AdminVacanciesJAE;
