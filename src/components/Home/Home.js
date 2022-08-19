import React, { useState, useEffect } from "react";
import { Grow, Container, Grid, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";

//import actions
import { getPosts } from "../../actions/posts";

//import components
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Pagination from "../Pagination";
//import styles
import useStyles from "../../styles";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={2}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />

            <Paper elevation={6}>
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
