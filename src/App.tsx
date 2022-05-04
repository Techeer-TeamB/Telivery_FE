/*

import React from 'react';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route path="/signUp" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

*/

import React from "react";
import loadable from "@loadable/component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Mainpage from "@pages/mainpage";
import About from "@pages/about";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
