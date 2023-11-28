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
            <Route path="/landing" exact component={Home} />
            <Route path="/productlist" exact component={ProductList} />
            <Route path="/" exact component={Signin} />
            <Route path="/logout" exact component={LogOut} />
            <Route path="/forgotpassword" exact component={Forgotpassword} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        
    </>
    
  );
};

export default App;