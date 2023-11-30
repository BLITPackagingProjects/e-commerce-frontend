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
import AddProduct from './components/AddProduct';

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthorizationService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthorizationService.logout();
  };

  return (
    <>

  <NavBar/>

       
          <Switch>
            <Route exact path="/landing"  component={Home} />
            <Route exact path="/productlist" component={ProductList} />
            <Route exact path="/"  component={Signin} />
            <Route exact path="/logout"  component={LogOut} />
            <Route exact path="/forgotpassword" component={Forgotpassword} />
            <Route exact path="/signup" component={Signup} />

            <Route exact path="/update/:id" component={Update} />
            <Route exact path="/AddProduct" component={AddProduct}/>
          </Switch>
        
    </>
    
  );
};

export default App;