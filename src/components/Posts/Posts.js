import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const { posts, isLoading } = useSelector((state) => state.posts);

  if (!posts.length && !isLoading) return "no posts";

  return !posts?.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((postItem, itemId) => (
        <Grid key={postItem._id} item xs={12} sm={12} md={6} lg={3}>
          <Post postItem={postItem} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
