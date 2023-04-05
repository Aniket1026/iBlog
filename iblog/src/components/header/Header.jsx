import React from 'react'
import { AppBar, Button, Toolbar, styled } from '@mui/material'
import { Link } from 'react-router-dom'

const Component = styled(AppBar)`
background:#FFFFFF;
`
const Container = styled(Toolbar)`
  & > a {
    padding: 20px;
    text-decoration: none;
    color: #6a89f2;
  }
`;

const Switch = styled(Button)`
    text-transform: none !important;
`;

const Header = () => {
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
    </Component>
  );
}

export default Header