import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  //the "posts" is from combinereduder in reducers file
  // console.log("my posts", posts);
  return (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((postItem) => (
        <Grid key={postItem._id} item xs={12} sm={6}>
          <Post postItem={postItem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
