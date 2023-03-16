import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/accounts/Login.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import "./App.css";

import DataProvider from "./context/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <Router>
          <Header />
        <div className="App" style={{marginTop:'60px'}}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
     </DataProvider>
  );
};

export default App;
