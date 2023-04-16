import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Component = styled(Box)`
  width: 400px;
  height: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const Image = styled("img")({
  width: 100,
  height: 60,
});

const Navigator = styled(Typography)`
     display:flex;
     flex-direction:row;
     align-items:center;
     justify-content:center;
     width:100;
     height:40px;
     cursor:pointer;
`

const ForgotPassword = () => {
  const imageURL =
        "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login')
    }

  return (
    <>
      <Component>
        <Image src={imageURL} alt="login" />
        <TextField
          id="outlined-basic"
          name="new password"
          label="new passsword"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="confirm new password"
          label="confirm new password"
          variant="outlined"
        />

        <Button variant="contained">RESET PASSWORD</Button>
        <Navigator onClick={navigateToLogin}>
          <ArrowBackIosIcon />
          Back to login
        </Navigator>
      </Component>
    </>
  );
};

export default ForgotPassword;
