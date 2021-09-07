import React, { useState } from 'react';
import axios from 'axios';

export const UpdateUserContext = React.createContext();

function DeleteUserProvider(props) {
  const UserId =window.location.search.split('=')[1];
  console.log(UserId);
  const [data, setData] = useState([]);
  const API = 'https://sab3at.herokuapp.com';

  const updateUser = async (event) => {
    userData = {
      userId: '', //come from click on user
      firstName: '', // the others come from event
      email: '',
      role: '',
      services: [],
      products: [],
    };

    const response = await axios.delete(
      `${API}/controlpanel/${UserId}`
    );
    // console.log('user list from home component', response);
    setData(response);
  };

  return (
    <UpdateUserContext.Provider value={{ data }}>
      {props.children}
    </UpdateUserContext.Provider>
  );
}

export default DeleteUserProvider;
