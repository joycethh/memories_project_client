import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";

import useStyles from "./styles";

const Paginate = ({ page }) => {
  // const { numberOfPage } = useSelector((state) => state.posts);
  const { numberOfPage } = useSelector((state) => {
    console.log(state);
    return state.posts;
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) dispatch(getPosts(page));
  }, [dispatch, page]);
  return (
    <Pagination
      className={classes.ul}
      count={numberOfPage}
      page={Number(page) || 1}
      vairant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${item.page}`}
        />
      )}
    />
  );
};

export default Paginate;
