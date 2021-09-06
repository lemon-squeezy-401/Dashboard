

  import React, { useState } from 'react';
import axios from 'axios';

export const DeleteUserContext = React.createContext();

function DeleteUserProvider(props) {
  const [data, setData] = useState([]);
  const API = 'https://sab3at.herokuapp.com';

  const deleteUsers = async (event) => {

    userId={
      userId: event.target.value // user that i will click i should have from getusers context
    }

    const response = await axios.delete(
      `${API}/controlpanel/6133992373f750001630cf4e`
    );
    console.log('user list from home component', response);
    setData(response);
  };
 
  return (
    <DeleteUserContext.Provider value={{ deleteUsers, data }}>
      {props.children}
    </DeleteUserContext.Provider>
  );
}

export default DeleteUserProvider;


