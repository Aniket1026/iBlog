import React, { useState,useContext } from "react";
import { API } from "../../service/api.js";
import { DataContext } from "../../context/DataProvider.jsx";

import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Component = styled(Box)`
  width: 400px;
  height: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding:20px;
`;

const Image = styled("img")({
  width: 100,
  height: 60,
});

const Para = styled("p")({
  marginLeft: 'auto',
  marginRight:'auto',
  color: "grey",
});

const Error = styled(Typography)`
    font-size:10;
    color : #ff6161;
    line-height:0;
    margin-top:10px;
    font-weight:600;
`

const Login = ({ isUserAuthenticated }) => {
  const [accountLogin, setAccountLogIn] = useState(true);
  const [error, setError] = useState("");
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();
  const loginInitialValues = {
    username: "",
    password: "",
  };

  const signUpValues = {
    name: "",
    username: "",
    password: "",
  };
  const [userDetail, setUserDetail] = useState(signUpValues);
  const [login, setLogin] = useState(loginInitialValues);
  const ToggleSignUp = () => {
    setAccountLogIn(!accountLogin);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
    console.log(userDetail);
  };

  const signUpUser = async () => {
    let response = await API.userSignup(userDetail);
    console.log("before ");
    console.log(response);
    console.log("after");
    if (response.isSuccess) {
      setError("");
      setUserDetail(signUpValues);
      setAccountLogIn(true);
    } else {
      setError("Something went wrong.Please try again later");
    }
  };

  const loginUser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
      setError("");
      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );
      sessionStorage.setItem(
        "refreshToken",
        `Bearer ${response.data.refreshToken}`
      );
      setAccount({
        username: response.data.username,
        name: response.data.name,
      });
      isUserAuthenticated(true);
      navigate("/");
    } else {
      setError("Something went wrong.Please try again later");
    }
  };

  // userDetail == signup
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

  return (
    <>
      {accountLogin ? (
        <Component>
          <Image src={imageURL} alt="login" />
          <TextField
            id="outlined-basic"
            onChange={onValueChange}
            name="username"
            label="username"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            onChange={onValueChange}
            name="password"
            label="password"
            variant="outlined"
          />
          {error && <Error>{error}</Error>}
          <Button variant="contained" onClick={loginUser}>
            {" "}
            Login{" "}
          </Button>
          <Button variant="contained"> Forgot password</Button>
          <Para>OR</Para>
          <Button variant="outlined" onClick={ToggleSignUp}>
            {" "}
            Create an account{" "}
          </Button>
        </Component>
      ) : (
        <Component>
          <Image src={imageURL} alt="login" />
          <TextField
            id="outlined-basic"
            label="Enter name"
            variant="outlined"
            onChange={onInputChange}
            name="name"
          />
          <TextField
            id="outlined-basic"
            name="username"
            onChange={onInputChange}
            label="username"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            name="password"
            onChange={onInputChange}
            label="password"
            variant="outlined"
          />
          {error && <Error>{error}</Error>}
          <TextField
            id="outlined-basic"
            name="email"
            onChange={onInputChange}
            label="email"
            variant="outlined"
          />
          <Button variant="contained" onClick={signUpUser}>
            {" "}
            Signup{" "}
          </Button>
          <Para>OR</Para>
          <Button variant="outlined" onClick={ToggleSignUp}>
            Already have an account
          </Button>
        </Component>
      )}
    </>
  );
};

export default Login;
