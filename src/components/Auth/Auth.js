import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import useStyles from "./styles";

import Input from "./Input";

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleShowPassword = () => {
    console.log("handleShowPassword" + handleShowPassword);
    setShowPassword((preShowPassword) => !preShowPassword);
  };

  const handleSubmit = () => {
    console.log("form is selected");
  };

  const handleChange = () => {};

  const switchMode = () => {
    setIsSignup((preIsSignup) => !preIsSignup);
    setShowPassword(false);
  };

  const googleSuccess = async (credentialResponse) => {
    const userObject = jwt_decode(credentialResponse.credential);
    console.log(userObject);
    const result = jwt_decode(credentialResponse.credential);
    console.log(result);
    const token = credentialResponse.credential;
    console.log(token);
    try {
      dispatch({ type: "AUTH", data: { result, token } });
    } catch (error) {
      console.log("google error" + error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google login failed");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />

                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>

          {/* local auth */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          {/* google auth */}
          <GoogleLogin onSuccess={googleSuccess} onError={googleFailure} />
          {/* no user: show sign in button */}
          {/* have user: show log out button  */}
          {user && (
            <div>
              <h3>{user.name}</h3>
              <Button
                variant="contained"
                onClick={() => {
                  console.log("googleLogout" + googleLogout);
                  googleLogout();
                }}
              >
                Log out
              </Button>
            </div>
          )}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : `Don't have an account? Sign Up`}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
