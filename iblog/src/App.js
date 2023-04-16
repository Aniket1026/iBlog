import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Login from "./components/accounts/Login.jsx";
import About from "./components/about/About.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import DetailsView from "./components/details/DetailsView.jsx";
import Update from "./components/create/Update.jsx";
import Contact from "./components/contact/Contact.jsx";
import "./App.css";

import DataProvider from "./context/DataProvider";
import CreatePost from "./components/create/CreatePost.jsx";
import ForgotPassword from "./components/accounts/ForgotPassword.jsx";

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
        <div className="App">
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
            <Route
              path="/details/:id"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route exact path="/details/:id" element={<DetailsView />} />
            </Route>
            <Route
              path="/update/:id"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route exact path="/update/:id" element={<Update />} />
            </Route>
            <Route
              path="/about"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route exact path="/about" element={<About />} />
            </Route>
            <Route
              path="/contact"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route exact path="/contact" element={<Contact />} />
            </Route>
            <Route exact path="/password/reset" element={<ForgotPassword />} />
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;

// change the hardcoded connection string in db.js and image-controller.js
