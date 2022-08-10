import React from "react";
import { useSelector } from "react-redux";

import Post from "./post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  //the "posts" is from combinereduder in reducers file
  console.log(posts);
  return (
    <>
      <div>Posts</div>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
