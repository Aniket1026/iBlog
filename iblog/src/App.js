import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Login from "./components/accounts/Login.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import "./App.css";

import DataProvider from "./context/DataProvider";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};

const App = () => {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <Router>
        <div className="App" style={{ marginTop: "60px" }}>
          <Routes>
            <Route
              exact
              path="/login"
              element={<Login isUserAuthenticated={isUserAuthenticated} />}
            />
            <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route exact path="/" element={<Home />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
