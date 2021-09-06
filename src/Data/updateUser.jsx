import React, { useState } from 'react';
import axios from 'axios';

export const UpdateUserContext = React.createContext();

function DeleteUserProvider(props) {
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
      `${API}/controlpanel/6133992373f750001630cf4e`
    );
    console.log('user list from home component', response);
    setData(response);
  };

  return (
    <UpdateUserContext.Provider value={{ updateUser, data }}>
      {props.children}
    </UpdateUserContext.Provider>
  );
}

export default DeleteUserProvider;
