import React, { useContext, useEffect } from 'react';
// import axios from 'axios';
import superagent from 'superagent';

import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
// import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
//-------------------adminContext---------------//
import { GetUsersContext } from '../../Data/getUsers';
export default function UserList() {
  const { data } = useContext(GetUsersContext);

  // console.log('data from context in user list component', data);

  const [Data, setData] = useState(data);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    setData(data);
  }, [data]);
  // useEffect(() => {
  //   function refreshPage() {
  //     window.location.reload();
  //   }
  // }, [Data]);

  console.log('Data state from user list component ===>', Data);
  //------------------------------Delete--------------------------------------------//
  const API = 'https://sab3at.herokuapp.com';

  const handleDelete = async (id) => {
    try {
      const userID = {
        userId: id,
      };

      await superagent.delete(
        `${API}/controlpanel/6133992373f750001630cf4e`,
        userID
      );
      let newData = Data.filter((item) => item.id !== id);
      console.log('new data after delete =D', newData);
      setData(newData);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(activeId);
  // const handleDelete = async (id) => {
  //   const userID = {
  //     userId: id,
  //   };

  //   let response = await axios.delete(
  //     `${API}/controlpanel/6133992373f750001630cf4e`,
  //     userID
  //   );

  //   const newUsers = data.filter((item) => item.id !== id);
  //   console.log(' DELETEDxxxxxxxxx', newUsers);
  //   setData(newUsers);
  // };

  // const handleDelete = (id) => {
  //   setData(Data.filter((item) => item.id !== id));
  // };

  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {/* {console.log('params log from userlist also', params)} */}
            {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
            {params.row.firstName}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    // {
    //   field: 'status',
    //   headerName: 'Status',
    //   width: 120,
    // },
    {
      field: 'transaction',
      headerName: 'Role',
      width: 160,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.role}</div>;
      },
    },
    {
      field: 'action',
      headerName: 'Edit',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: `/user/ ${params.row.id}`,
                state: {
                  firstName: params.row.firstName,
                  email: params.row.email,
                  role: params.row.role,
                },
              }}
            >
              <button
                className="userListEdit"
                onClick={(id) => setActiveId(params.row.id)}
              >
                Edit
              </button>
            </Link>
            {/* <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
          </>
        );
      },
    },
    {
      field: 'Delete',
      headerName: 'Delete',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={'/user/' + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link> */}
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  const Test = () => {
    const x = data;
    return (
      <DataGrid
        rows={x}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    );
  };
  return (
    <div className="userList">
      <Test />
      {/* <DataGrid
        rows={Data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      /> */}
    </div>
  );
}
