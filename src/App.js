import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';
import Home from './pages/home/Home';
import { Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import ServiceList from './pages/serviceList/ServiceList';
// import Service from './pages/service/Service';
// import NewService from './pages/newService/NewService';
function Dashboard(props) {
  const UserId = window.location.search.split('=')[1];
  console.log(UserId);

  return (
    <>
      {/* // <Router> */}
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            {/* <Route path={`/?${UserId}/users`}> */}
            <UserList />
          </Route>
          <Route path={`/user/:userId`}>
            {/* <Route path={`/?${UserId}/user/:userId`}> */}
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/services">
            <ServiceList />
          </Route>
          <Route
                  path="/website"
                  component={() => {
                    window.location.href = `http://localhost:3000`; //token should pass as param and (usequiry)* or useparams
                    return null;
                  }}
                />
          {/* <Route path="/service/:serviceId">
            <Service />
          </Route>
          <Route path="/newservice">
            <NewService />
          </Route> */}
        </Switch>
      </div>
      {/* // </Router> */}
    </>
  );
}

export default Dashboard;
