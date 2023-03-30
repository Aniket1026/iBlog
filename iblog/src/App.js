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
import CreatePost from "./components/create/CreatePost.jsx";

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
            <Route
              path="/"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route exact path="/" element={<Home />} />
            </Route>
            <Route
              path="/create"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route exact path="/create" element={<CreatePost />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;

// change the hardcoded connection string in db.js and image-controller.js
