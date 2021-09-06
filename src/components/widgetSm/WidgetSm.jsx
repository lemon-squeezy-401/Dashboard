import React, { useState, useEffect, useContext } from 'react';

import './widgetSm.css';
import { Visibility } from '@material-ui/icons';

//-------------------adminContext---------------//
import { GetUsersContext } from '../../Data/getUsers';
//---------------------------------------------//
export default function WidgetSm() {
  //-------------------adminContext---------------//
  const { data, getUsers } = useContext(GetUsersContext);
 
  // useEffect(() => {
  //   getUsers();
  // }, [])
  console.log('data from widgsetsm component', data);
    
 
  //-----------------------------------------------------//
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {/* {data.data.map((item) => (
          <li className="widgetSmListItem" key={item.id}>
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{item.firstName}</span>
              <span className="widgetSmUserTitle">{item.email}</span>
              <span className="widgetSmUserTitle">{item.role}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))} */}
       
      </ul>
    </div>
  );
}
