import React, { useState, useEffect, useContext } from 'react';

import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import axios from 'axios';

//-------------------adminContext---------------//
import { GetUsersContext } from '../../Data/getUsers';
//---------------------------------------------//

export default function Home(props) {
  //-------------------adminContext---------------//
  const { data, getUsers } = useContext(GetUsersContext);
  useEffect(async () => {
    getUsers();
  });
  //-----------------------------------------------------//
  // const [data, setData] = useState([]);
  // const API = 'https://sab3at.herokuapp.com';

  // useEffect(async () => {
  //   const response = await axios.get(
  //     `${API}/controlpanel/6133992373f750001630cf4e`
  //   );
  //   console.log('user list from home component', response);
  //   setData(response);
  // });

  //---------------------------------------------//
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
