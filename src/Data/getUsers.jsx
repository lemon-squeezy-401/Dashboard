import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const GetUsersContext = React.createContext();

function GetUsersProvider(props) {
  const UserId = window.location.search.split('=')[1];
  console.log(UserId);

  const [data, setData] = useState([]);
  const API = 'https://sab3at.herokuapp.com';

  const getUsers = async () => {
    // const response = await axios.get(`${API}/controlpanel/${UserId}`);
    const response = await axios.get(`${API}/controlpanel/6133992373f750001630cf4e`);
   

    setData(response.data);
    // console.log('arr from all users', response.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const state = { data };
  return (
    <GetUsersContext.Provider value={state}>
      {props.children}
    </GetUsersContext.Provider>
  );
}

export default GetUsersProvider;
