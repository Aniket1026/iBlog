import React from "react";

import { Box, TextField, Button, styled } from "@mui/material";

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

const ForgotPassword = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

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
      </Component>
    </>
  );
};

export default ForgotPassword;
