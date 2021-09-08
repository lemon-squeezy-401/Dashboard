import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import superagent from 'superagent';

import { useHistory, Link } from 'react-router-dom';

import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons';
// import { Link } from 'react-router-dom';
import './user.css';
import { GetUsersContext } from '../../Data/getUsers';

export default function User() {
  let history = useHistory();

  const activeId = history.location.pathname.split('/')[2];
  const historyState = history.location.state;
  console.log(
    'active id from user component/ update function',
    // history.location.state
    activeId
  );

  const { data } = useContext(GetUsersContext);
  const [Data, setData] = useState(data);

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  console.log('data befor updating', Data);

  useEffect(() => {
    setData(data);
  }, [data]);

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleRole = (event) => {
    setRole(event.target.value);
  };

  // const handlePassword = (event) => {
  //   setPassword(event.target.value);
  // };
  const API = 'https://sab3at.herokuapp.com';

  const handleUpdate = async (e) => {
    e.preventDefault();

    let body = {
      userId: activeId,
      firstName:firstName,
      email:email,
      // password,
      role:role,
    };
    console.log('body from update user % % % % ', body);
    const response = await axios.put(
      `https://sab3at.herokuapp.com/controlpanel/6133992373f750001630cf4e`,body
    )
    // const response = await axios({
    //   method: 'put',
    //   url: `https://sab3at.herokuapp.com/controlpanel/6133992373f750001630cf4e`,
    //   body,
    // });

    setData([...Data, response]);

    console.log('Response after updating # # # #  ', response);
    console.log('Data after updating @ @ @ @ @ ', Data);
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{historyState.firstName}</span>
              {/* <span className="userShowUserTitle">Software Engineer</span> */}
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">
                {historyState.firstName}
              </span>
            </div>
            {/* <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div> */}
            {/* <span className="userShowTitle">Contact Details</span> */}
            {/* <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div> */}
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{historyState.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{historyState.role}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={handleUpdate}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  onChange={handleFirstName}
                  type="text"
                  placeholder="name"
                  className="userUpdateInput"
                />
              </div>
              {/* <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div> */}
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  onChange={handleEmail}
                  type="text"
                  placeholder="any@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Role</label>
                <input
                  onChange={handleRole}
                  type="text"
                  placeholder="user or admin"
                  className="userUpdateInput"
                />
              </div>
              {/* <div className="userUpdateItem">
                <label>Password</label>
                <input
                  onChange={handlePassword}
                  type="text"
                  placeholder="password"
                  className="userUpdateInput"
                />
              </div> */}
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
