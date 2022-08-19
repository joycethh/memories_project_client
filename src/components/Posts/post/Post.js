import React from "react";
import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";

import { useDispatch } from "react-redux";

import useStyles from "./styles";
//import actions from the action
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ postItem, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleDelete = () => {
    dispatch(deletePost(postItem._id));
  };

  // const handleCount = () => {
  //   dispatch(likePost(postItem._id));
  // };

  const Likes = () => {
    if (postItem.likes.length > 0) {
      return postItem.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {postItem.likes.length > 2
            ? `You and ${postItem.likes.length - 1} others`
            : `${postItem.likes.length} like${
                postItem.likes.length > 1 ? "s" : ""
              }`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{postItem.likes.length}{" "}
          {postItem.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <CardMedia
        className={classes.media}
        image={postItem.selectedFile}
        title={postItem.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{postItem.name}</Typography>
        <Typography variant="body2">
          {moment(postItem.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?.sub === postItem?.creator ||
        user?.result._id === postItem?.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => {
              setCurrentId(postItem._id);
            }}
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
      )}

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="p">
          {postItem.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        variant="h5"
        compoennt="h2"
        gutterBottom
      >
        {postItem.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" component="p">
          {postItem.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {/* <Button size="small" color="primary" onClick={handleCount}>
          <ThumbUpAltIcon /> &nbsp; Like &nbsp; {postItem.likeCount}
        </Button> */}
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(postItem._id))}
        >
          <Likes />
        </Button>
        {(user?.result?.sub === postItem?.creator ||
          user?.result._id === postItem?.creator) && (
          <Button size="small" color="secondary" onClick={handleDelete}>
            <DeleteIcon />
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
