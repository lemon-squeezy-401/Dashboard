import React, { useContext } from 'react';

import './widgetSm.css';
import { Visibility } from '@material-ui/icons';

//-------------------adminContext---------------//
import { GetUsersContext } from '../../Data/getUsers';
//---------------------------------------------//
export default function WidgetSm() {
  //-------------------adminContext---------------//
  const { data } = useContext(GetUsersContext);
  console.log('data from widgsetsm component', data);
  //-----------------------------------------------------//
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {data.map((item) => (
          <li className="widgetSmListItem" key={item.id}>
            <img
              src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser" style={{width:'13rem'}}>
              <span className="widgetSmUsername" style={{fontWeight:'bolder'}}>{item.firstName}</span>
              <span className="widgetSmUserTitle">Email: {item.email}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              {item.role}
            </button>
          </li>
        ))}
       
      </ul>
    </div>
  );
}
