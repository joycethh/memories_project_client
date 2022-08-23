import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import useStyles from "./styles";

import memoriesLogo from "../../image/memories-logo.png";
import memoriesText from "../../image/memories-text.png";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/");

    setUser(null);
  };

  useEffect(() => {
    //check if token expired.
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AppBar
      className={classes.appBar}
      position="static"
      color="inherit"
      height="55"
    >
      <Link to="/" className={classes.brandContainer}>
        <img src={memoriesText} alt="brand" height="45px" />
        <img
          className={classes.image}
          src={memoriesLogo}
          alt="logo"
          height="35"
        />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.toolbar}>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.picture}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
