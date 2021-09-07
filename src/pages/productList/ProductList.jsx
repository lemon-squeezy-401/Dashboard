import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import './productList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
//-------------------adminContext---------------//
import { GetUsersContext } from '../../Data/getUsers';

export default function ProductList() {
  const { data } = useContext(GetUsersContext);
  const [Data, setData] = useState(data);
  let arr = [];

  useEffect(() => {

    data.forEach((user) => {
      user.products.forEach((product) => {
        console.log(product);
        arr.push(product);
      });
    });
    setData(arr);
    console.log('here', arr);
    console.log('theeeeere', Data);
  }, [data]);


  //   /--------------------/
  // console.log('xxxx',Data)

  // console.log('arr logged from products list',arr);
  // console.log('Data state logged from products list',Data);

  // useEffect(() => {
  //   function refreshPage() {
  //     window.location.reload();
  //   }
  // }, [Data]);

  //------------------------------Delete--------------------------------------------//
  const API = 'https://sab3at.herokuapp.com';

  // const handleDelete = async (id) => {

  //   const userID= {
  //     userId: id,
  //   };
  //   const response = await axios.delete(
  //     `${API}/controlpanel/6133992373f750001630cf4e` ,userID
  //   );
  //   const newUsers = arr.filter( item => item.id !== id );
  //   setData(newUsers);

  // };

  // const handleDelete = (id) => {
  //   setData(Data.filter((item) => item._id !== id));
  // };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.price}</div>;
      },
    },
    {
      field: 'action',
      headerName: 'Edit',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            {/* <DeleteOutline
              className="productListDelete"
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
            {/* <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link> */}
            <DeleteOutline
              className="productListDelete"
              // onClick={() => handleDelete(params.row.id)}
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
      // <p>{x.length}</p>
    );
  };
  return (
    <div className="productList">
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
