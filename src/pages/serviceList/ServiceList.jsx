import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import './serviceList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
// import { productRows } from "../../dummyData";
import { Link } from 'react-router-dom';
//-------------------adminContext---------------//
import { GetUsersContext } from '../../Data/getUsers';

export default function ServiceList() {
  const { data } = useContext(GetUsersContext);

  let arr = [];
  data.forEach((user) => user.services.forEach((service) => arr.push(service)));
  const [Data, setData] = useState(data);
  // const [state, setState] = useState(data)

  console.log('arr logged from services list', arr);
  console.log('Data state logged from services list', Data);

   //-----------create id --------------//
   let newId = Math.random();
   arr.forEach((item) => {
     item['id'] = newId;
   });
   //------------------------------//
   useEffect(() => {
    setData(arr);
    

    console.log('here ++++++++', arr);
    // console.log('here &&&&&', state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  //------------------------------Delete--------------------------------------------//
  const API = 'https://sab3at.herokuapp.com';

  const handleDelete = async (id) => {
    const userID = {
      userId: id,
    };
    await axios.delete(`${API}/controlpanel/6133992373f750001630cf4e`, userID);
    const newUsers = arr.filter((item) => item.id !== id);
    setData(newUsers);
  };
  // const handleDelete = (id) => {
  //   setData(Data.filter((item) => item._id !== id));
  // };

  const columns = [
    { field: '_id', headerName: 'ID', width: 120 },
    {
      field: 'service',
      headerName: 'service',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="serviceListItem">
            <img className="serviceListImg" src={params.row.image} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    // { field: 'stock', headerName: 'Stock', width: 200 },
    // {
    //   field: 'status',
    //   headerName: 'Status',
    //   width: 120,
    // },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
      renderCell: (params) => {
        return <div className="serviceListItem">{params.row.price}</div>;
      },
    },
    {
      field: 'action',
      headerName: 'Edit',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/service/' + params.row.id}>
              <button className="serviceListEdit">Edit</button>
            </Link>
            {/* <DeleteOutline
              className="serviceListDelete"
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
            {/* <Link to={"/service/" + params.row.id}>
              <button className="serviceListEdit">Edit</button>
            </Link> */}
            <DeleteOutline
              className="serviceListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const Test = () => {
    const x = Data;
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
    </div>
  );
}
