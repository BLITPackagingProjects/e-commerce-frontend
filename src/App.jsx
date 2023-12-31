import React from 'react';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Forgotpassword from './components/Forgotpassword';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import { useState, useEffect } from "react";
import AuthorizationService from './components/service/AuthorizationService';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import LogOut from './components/LogOut';
import 'bootstrap/dist/css/bootstrap.css';
import Update from './components/Update';
import Display from './components/Display';
import ProductDisplay from './components/ProductDisplay';
import ProductSearch from './components/ProductSearch';
import ProductSearchRedirect from './components/ProductSearchRedirect';
import SearchField from './components/SearchField'
import OrderHistory from './components/OrderHistory';
import OrdersHistoryOfCustomer from './components/OrdersHistoryOfCustomer';
import Orders from './components/Orders';
import RegisterProduct from './components/RegisterProduct';

const App = () => {
  // const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {
  //   const user = AuthorizationService.getCurrentUser();

  //   if (user) {
  //     setCurrentUser(user);
  //   }
  // }, []);

  // const logOut = () => {
  //   AuthorizationService.logout();


  return (
    <>
  <Switch>
    <Route path="*" component={NavBar}/>
  </Switch>
       
          <Switch>
            <Route exact path="/landing"  component={Home} />
            <Route exact path="/productlist" component={ProductList} />
            <Route exact path="/display" component={ProductDisplay} />
            <Route exact path="/results" component={ProductSearch} />
            <Route exact path="/search" component={ProductSearchRedirect} />
            <Route exact path="/"  component={Signin} />
            <Route exact path="/logout"  component={LogOut} />
            <Route exact path="/forgotpassword" component={Forgotpassword} />
            <Route exact path="/signup" component={Signup} />

            <Route exact path="/orderhistory" component={Orders} />

            <Route exact path="/customerorderhistory" component={OrdersHistoryOfCustomer} />

            <Route exact path="/update/:id" component={Update} />

            <Route exact path="/addproduct" component={RegisterProduct} />
          </Switch>
        
    </>
    
  );
};

export default App;