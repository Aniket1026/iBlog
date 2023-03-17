import React from 'react'
import { AppBar, Toolbar, Typography, styled } from '@mui/material'
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

const Header = () => {
  return (
      <Component>
          <Container>
              <Link to='/'>HOME</Link>
              <Link to ='/about'>ABOUT</Link>
              <Link to ='/contact'>CONTACT</Link>
              <Link to ='/login'>Logout</Link>
          </Container>
    </Component>
  )
}

export default Header