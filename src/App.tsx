import React from "react";
import loadable from "@loadable/component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "@pages/mainpage";
import { Login } from "@pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
