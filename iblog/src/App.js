import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/accounts/Login";
import Home from "./components/home/Home";
import "./App.css";


import DataProvider from "./context/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <div className="App">
        <Login />
      </div>
    </DataProvider>
  );
}

export default App;
