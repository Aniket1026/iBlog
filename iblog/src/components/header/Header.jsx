import React, { useState } from "react";
import { AppBar, Button, Toolbar, styled } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { Link } from "react-router-dom";
import { yellow } from "@mui/material/colors";

const Component = styled(AppBar)`
  background: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;
const Container = styled(Toolbar)`
  & > a {
    text-decoration: none;
    color: #6a89f2;
  }
`;

const Switch = styled(Button)`
  text-transform: none !important;
`;

const ModeButton = {cursor:'pointer'}

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Component>
      <Container>
        <Link to="/">
          <Switch variant="oulined">Home</Switch>
        </Link>
        <Link to="/about">
          <Switch variant="oulined">About</Switch>
        </Link>
        <Link to="/contact">
          <Switch variant="oulined">Contact</Switch>
        </Link>
        <Link to="/login">
          <Switch variant="oulined">Logout</Switch>
        </Link>
      </Container>
      {darkMode ? (
        <NightlightIcon
          sx={{ color: "black" }}
          onClick={() => setDarkMode(!darkMode)}
          style={ModeButton}
        />
      ) : (
        <LightModeIcon
          sx={{ color: yellow[800] }}
          onClick={() => setDarkMode(!darkMode)}
          style={ModeButton}
        />
      )}
    </Component>
  );
};

export default Header;