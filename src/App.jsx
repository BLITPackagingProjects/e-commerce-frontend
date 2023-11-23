import React from 'react';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Forgotpassword from './components/Forgotpassword';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import { useState, useEffect } from "react";
import AuthorizationService from './components/service/AuthorizationService';

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

        <Router>
          <Switch>
            <Route path="/landing" exact component={Home} />
            <Route path="/" exact component={Signin} />
            <Route path="/forgotpassword" exact component={Forgotpassword} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </Router>
    </>
    
  );
};

export default App;