import React from 'react'
import { AppBar,Toolbar, Typography,styled } from '@mui/material'

const Component = styled(AppBar)`
background:#FFFFFF;
color:#6A99F2;
`
const Container = styled(Toolbar)`
     & > p{
        padding:20px;
     }
`

const Header = () => {
  return (
      <Component>
          <Container>
              <Typography>HOME</Typography>
              <Typography>ABOUT</Typography>
              <Typography>CONTACT</Typography>
              <Typography>Logout</Typography>
          </Container>
    </Component>
  )
}

export default Header