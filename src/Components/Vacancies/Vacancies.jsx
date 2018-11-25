import React, { Component } from "react";
import "./Vacancies.css";

{/*  THERE ARE COMMENTS IN THIS CODE TO SHOW MY UNDERSTANDING OF WORKING WITH THE API*/ }

class Vacancies extends Component {
  render() {
    return <div className="Openings">
        <h1>Current Openings</h1>
        <div>
          <p>
            If you would like to keep up to date with new vacancies input
            your email below
          </p>

          <label for="email">
            <b>Email</b><br/>
          </label>
          {/* Here I would make a call to the API to add the email to the database - code example below as comment */}
          <input type="text" placeholder="Enter Email" name="email" required />
        </div>
        <div>
          <label for="“name”">
            <b>Full Name</b><br/>
          </label> <input id="name" type="text" placeholder="E.g John Smith" required />
        </div>
        <button type="submit">Submit</button>

        <ul>
          <li>
            <div className="vacDropdown">
              <button className="vacDropbtn">
                <h2>Content Researcher</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <div className="vacDropdown-content">
                  <form className="contactForm" novalidate="">
                    <div className="formitem">
                      <label for="“name”">Full Name</label> <input id="name" type="text" placeholder="E.g John Smith" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“email”">Email Address</label>
                      <input id="email" type="email" placeholder="E.g John.Smith@gmail.com" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“phone”">Phone Number</label>
                      <input id="phone" type="tel" placeholder="E.g 07123456789" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“cv”">Upload CV</label>
                      <input type="file" />
                    </div>
                    <div class="form-item">
                      <label for="“message”">Cover Letter</label>
                      <textarea id="message" rows="5" placeholder="Not Required"/>
                    </div>
                    <br />
                    <button type="submit">Send</button>
                  </form>
                </div>
              </button>
            </div>
          </li>
          <li>
            <div className="vacDropdown">
              <button className="vacDropbtnEve">
                <h2>Junior Account Executive</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <div className="vacDropdown-content">
                  <form id="contactForm" novalidate="">
                    <div class="form-item">
                      <label for="“name”">Full Name</label> <input id="name" type="text" placeholder="E.g John Smith" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“email”">Email Address</label>
                      <input id="email" type="email" placeholder="E.g John.Smith@gmail.com" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“phone”">Phone Number</label>
                      <input id="phone" type="tel" placeholder="E.g 07123456789" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“cv”">Upload CV</label>
                      <input type="file" />
                    </div>
                    <div class="form-item">
                      <label for="“message”">Cover Letter</label>
                      <textarea id="message" rows="5" placeholder="Not Required"/>
                    </div>
                    <br />
                    <button type="submit">Send</button>
                  </form>
                </div>
              </button>
            </div>
          </li>
          <li>
            <div className="vacDropdown">
              <button className="vacDropbtn">
                <h2>Influencer Coordinator</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <div className="vacDropdown-content">
                  <form id="contactForm" novalidate="">
                    <div class="form-item">
                      <label for="“name”">Full Name</label> <input id="name" type="text" placeholder="E.g John Smith" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“email”">Email Address</label>
                      <input id="email" type="email" placeholder="E.g John.Smith@gmail.com" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“phone”">Phone Number</label>
                      <input id="phone" type="tel" placeholder="E.g 07123456789" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“cv”">Upload CV</label>
                      <input type="file" />
                    </div>
                    <div class="form-item">
                      <label for="“message”">Cover Letter</label>
                      <textarea id="message" rows="5" placeholder="Not Required"/>
                    </div>
                    <br />
                    <button type="submit">Send</button>
                  </form>
                </div>
              </button>
            </div>
          </li>
          <li>
            <div className="vacDropdown">
              <button className="vacDropbtnEve">
                <h2>Account Manager</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <div className="vacDropdown-content">
                  <form id="contactForm" novalidate="">
                    <div class="form-item">
                      <label for="“name”">Full Name</label> <input id="name" type="text" placeholder="E.g John Smith" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“email”">Email Address</label>
                      <input id="email" type="email" placeholder="E.g John.Smith@gmail.com" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“phone”">Phone Number</label>
                      <input id="phone" type="tel" placeholder="E.g 07123456789" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“cv”">Upload CV</label>
                      <input type="file" />
                    </div>
                    <div class="form-item">
                      <label for="“message”">Cover Letter</label>
                      <textarea id="message" rows="5" placeholder="Not Required"/>
                    </div>
                    <br />
                    <button type="submit">Send</button>
                  </form>
                </div>
              </button>
            </div>
          </li>
          <li>
            <div className="vacDropdown">
              <button className="vacDropbtn">
                <h2>Front-End Web Developer</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <div className="vacDropdown-content">
                  <form id="contactForm" novalidate="">
                    <div class="form-item">
                      <label for="“name”">Full Name</label> <input id="name" type="text" placeholder="E.g John Smith" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“email”">Email Address</label>
                      <input id="email" type="email" placeholder="E.g John.Smith@gmail.com" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“phone”">Phone Number</label>
                      <input id="phone" type="tel" placeholder="E.g 07123456789" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“cv”">Upload CV</label>
                      <input type="file" />
                    </div>
                    <div class="form-item">
                      <label for="“message”">Cover Letter</label>
                      <textarea id="message" rows="5" placeholder="Not Required"/>
                    </div>
                    <br />
                    <button type="submit">Send</button>
                  </form>
                </div>
              </button>
            </div>
          </li>
          <li>
            <div className="vacDropdown">
              <button className="vacDropbtnEve">
                <h2>Head Of New Business & Client Development</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <div className="vacDropdown-content">
                  <form id="contactForm" novalidate="">
                    <div class="form-item">
                      <label for="“name”">Full Name</label> <input id="name" type="text" placeholder="E.g John Smith" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“email”">Email Address</label>
                      <input id="email" type="email" placeholder="E.g John.Smith@gmail.com" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“phone”">Phone Number</label>
                      <input id="phone" type="tel" placeholder="E.g 07123456789" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“cv”">Upload CV</label>
                      <input type="file" />
                    </div>
                    <div class="form-item">
                      <label for="“message”">Cover Letter</label>
                      <textarea id="message" rows="5" placeholder="Not Required"/>
                    </div>
                    <br />
                    <button type="submit">Send</button>
                  </form>
                </div>
              </button>
            </div>
          </li>
          <li>
            <div className="vacDropdown">
              <button className="vacDropbtn">
                <h2>Partnership Sales Manager</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <div className="vacDropdown-content">
                  <form id="contactForm" novalidate="">
                    <div class="form-item">
                      <label for="“name”">Full Name</label> <input id="name" type="text" placeholder="E.g John Smith" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“email”">Email Address</label>
                      <input id="email" type="email" placeholder="E.g John.Smith@gmail.com" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“phone”">Phone Number</label>
                      <input id="phone" type="tel" placeholder="E.g 07123456789" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“cv”">Upload CV</label>
                      <input type="file" />
                    </div>
                    <div class="form-item">
                      <label for="“message”">Cover Letter</label>
                      <textarea id="message" rows="5" placeholder="Not Required"/>
                    </div>
                    <br />
                    <button type="submit">Send</button>
                  </form>
                </div>
              </button>
            </div>
          </li>
          <li>
            <div className="vacDropdown">
              <button className="vacDropbtnEve">
                <h2>Client Development Director</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <div className="vacDropdown-content">
                  <form id="contactForm" novalidate="">
                    <div class="form-item">
                      <label for="“name”">Full Name</label> <input id="name" type="text" placeholder="E.g John Smith" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“email”">Email Address</label>
                      <input id="email" type="email" placeholder="E.g John.Smith@gmail.com" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“phone”">Phone Number</label>
                      <input id="phone" type="tel" placeholder="E.g 07123456789" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“cv”">Upload CV</label>
                      <input type="file" />
                    </div>
                    <div class="form-item">
                      <label for="“message”">Cover Letter</label>
                      <textarea id="message" rows="5" placeholder="Not Required"/>
                    </div>
                    <br />
                    <button type="submit">Send</button>
                  </form>
                </div>
              </button>
            </div>
          </li>
          <li>
            <div className="vacDropdown">
              <button className="vacDropbtn">
                <h2>Speculative Application</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <div className="vacDropdown-content">
                  <form id="contactForm" novalidate="">
                    <div class="form-item">
                      <label for="“name”">Full Name</label> <input id="name" type="text" placeholder="E.g John Smith" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“email”">Email Address</label>
                      <input id="email" type="email" placeholder="E.g John.Smith@gmail.com" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“phone”">Phone Number</label>
                      <input id="phone" type="tel" placeholder="E.g 07123456789" required="" />
                    </div>
                    <div class="form-item">
                      <label for="“cv”">Upload CV</label>
                      <input type="file" />
                    </div>
                    <div class="form-item">
                      <label for="“message”">Cover Letter</label>
                      <textarea id="message" rows="5" placeholder="Not Required"/>
                    </div>
                    <br />
                    <button type="submit">Send</button>
                  </form>
                </div>
              </button>
            </div>
          </li>
        </ul>
      </div>;
    {
      /*
     const postEmail = (email_id, data) => {
  return axios.get(`${apiUrl}/database/emailBase/${email_id}`, data);
}

postEmail(this.state.email_id, sentText)
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

export default Vacancies;
