import React from 'react';

// import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
// import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
// import axios from 'axios';

//-------------------adminContext---------------//
// import { GetUsersContext } from '../../Data/getUsers';
//---------------------------------------------//

export default function Home(props) {
  const UserId =window.location.search.split('=')[1];
  console.log(UserId);
  //-------------------adminContext---------------//
  // const { data } = useContext(GetUsersContext);
  // useEffect(async () => {
  //   getUsers();
  // });
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


  // useEffect(() => {
  //   const SearchPage = ({ match, location }) => {
  //     return (
  //       <p>
  //         <strong>Location Props: </strong>
  //         {JSON.stringify(location, null, 2)}
  //       </p>
  //     );
  //   };
  // }, []);
  return (
    <div className="home">
      <FeaturedInfo />
      {/* <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      /> */}
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
