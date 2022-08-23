import "dotenv/config";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@material-ui/core";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import PostDetails from "./components/PostDetails/PostDetails";
import Auth from "./components/Auth/Auth";

const ID = process.env.REACT_APP_GOOGLE_ID;

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <GoogleOAuthProvider clientId={ID}>
      <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar />
          <Routes>
            {/* <Route path="/" exact element={<Home />} /> */}
            <Route path="/" element={<Navigate replace to="/posts" />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/posts/search" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route
              path="/auth"
              element={!user ? <Auth /> : <Navigate replace to="/posts/" />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
