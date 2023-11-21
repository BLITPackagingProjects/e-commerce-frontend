import React from 'react';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Forgotpassword from './components/Forgotpassword';
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
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
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<Home/>}/>
          <Route path="/" element={<Signin />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>

    </div>
    
  );
};

export default App;