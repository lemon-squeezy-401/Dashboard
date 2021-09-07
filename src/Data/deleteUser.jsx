import React, { useState } from 'react';
import axios from 'axios';

export const DeleteUserContext = React.createContext();

function DeleteUserProvider(props) {
  const [data, setData] = useState([]);
  const API = 'https://sab3at.herokuapp.com';

  const deleteUsers = async (id) => {
    const UserId = window.location.search.split('=')[1];
    console.log(UserId);

    const [data, setData] = useState('')
    userId = {
      userId: id, // user that i will click i should have from getusers context
    };

    // const response = await axios.delete(
    //   `${API}/controlpanel/${UserId}`
    // );
    const response = await axios.delete(
      `${API}/controlpanel/6133992373f750001630cf4e` ,userId
    );
    response = data.filter( product => product._id !== _id );
    setData(response);

    // console.log('user list from home component', response);
    setData(response);
  };

  return (
    <DeleteUserContext.Provider value={{ data, deleteUsers }}>
      {props.children}
    </DeleteUserContext.Provider>
  );
}

export default DeleteUserProvider;
