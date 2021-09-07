import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import './newUser.css';

export default function NewUser() {
  const [newUser, setNewUser] = useState([]);
  const API = 'https://sab3at.herokuapp.com';

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleRole = (event) => {
    setRole(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const addUser = async (event) => {
    event.preventDefault();

    try {
      const data = {
        firstName,
        email,
        password,
        role,
      };
      console.log(data);
      const response = await axios.post(
        `${API}/controlpanel/6133992373f750001630cf4e`,
        data
      );
      console.log('response of users from new user component', response);
      setNewUser([...newUser,response]);
    } catch (error) {console.error(error);}
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={addUser}>
        <div className="newUserItem">
          <label>Username</label>
          <input onChange={handleFirstName} type="text" placeholder="name .." />
        </div>
        <div className="newUserItem">
          <label>Role</label>
          <input
            onChange={handleRole}
            type="text"
            placeholder="user or admin"
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            onChange={handleEmail}
            type="email"
            placeholder="name@gmail.com"
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            onChange={handlePassword}
            type="password"
            placeholder="password"
          />
        </div>
        {/* <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <button type="submit" className="newUserButton">
          Create
        </button>
      </form>
    </div>
  );
}
