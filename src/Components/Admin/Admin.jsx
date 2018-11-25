import React, { Component } from 'react';
import "./Admin.css"
import { Link } from "react-router-dom";

{/*  THERE ARE COMMENTS IN THIS CODE TO SHOW MY UNDERSTANDING OF WORKING WITH THE API*/}


class Admin extends Component {
  render() {
    return <div className="loginPage">
        <div>
          <h1>Login</h1>
          <p> Please login below</p>
          Username
          <div >
            <input type="text" name="uName" value={this.props.existingUser} onChange={this.props.handleChangeUser} />
          </div>
        
          Password (8 characters minimum)<div>
          <input type="password" name="password"
            minlength="8" />
</div>
{/* Here I would collect data and use this as a call to the API - Code example below as comment*/}
        <Link to="/adminManagement">Submit</Link>

        </div>
      </div>;
      {
        /* 
      handleLogin = () => {
    this.state.allUsers.forEach((user, index) => {
      if (user.username === this.state.existingUser) {
        return this.setState({
          currentUser: user.username
        });
      }
    });
  };
      */
      }
  }
}

export default Admin;