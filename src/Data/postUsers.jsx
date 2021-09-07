import React, { useState } from 'react';
import axios from 'axios';

export const CreatAccountContext = React.createContext();

function CreatAccountProvider(props) {
  const [newUser, setNewUser] = useState({});
  const API = 'https://sab3at.herokuapp.com';

  const addUser = async (event) => {
    const UserId =window.location.search.split('=')[1];
  console.log(UserId);


    event.preventDefault();
    const data = {
      firstName: event.target.name.value,
      // lastName: event.target.value,
      email: event.target.email.value,
      password: event.target.password.value,
      role: event.target.role.value,
    };
    // const response = await axios.post(
    //   `${API}/controlpanel/${UserId}`,
    //   data
    // );
    const response = await axios.get(`${API}/controlpanel/6133992373f750001630cf4e`);

    // console.log('user list from postUsers component', response);
    setNewUser(response);
  };

  return (
    <CreatAccountContext.Provider value={{  newUser }}>
      {props.children}
    </CreatAccountContext.Provider>
  );
}

export default CreatAccountProvider;
