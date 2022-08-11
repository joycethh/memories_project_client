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
import DeleteIcon from "@material-ui/icons/Delete";

import moment from "moment";

import useStyles from "./styles";

const Post = ({ postItem }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={postItem.selectedFile}
        title={postItem.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{postItem.creator}</Typography>
        <Typography variant="body2">
          {moment(postItem.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
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
        <Typography className={classes.title} variant="body2" component="p">
          {postItem.title}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon /> Like {postItem.likeCount}
        </Button>
        <Button size="small" color="secondary" onClick={() => {}}>
          <DeleteIcon />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
