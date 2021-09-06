import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const GetUsersContext = React.createContext();

function GetUsersProvider(props) {
  const [data, setData] = useState([]);
  const API = 'https://sab3at.herokuapp.com';

  const getUsers = async () => {
    const response = await axios.get(
      `${API}/controlpanel/6133992373f750001630cf4e`
    );
    console.log('user list from home component', response);
    setData(response);
  };
  useEffect(() => {
    getUsers();
  }, [])
 
  return (
    <GetUsersContext.Provider value={{ getUsers, data }}>
      {props.children}
    </GetUsersContext.Provider>
  );
}

export default GetUsersProvider;
