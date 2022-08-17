import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  UPDATE_LIKE,
} from "../contants/actionType";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL: {
      return action.payload;
    }
    case CREATE: {
      return [...posts, action.payload];
    }
    case UPDATE:
    case UPDATE_LIKE: {
      // return [...posts, action.payload];
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    }
    case DELETE: {
      return posts.filter((restPosts) => restPosts._id !== action.payload);
    }
    default:
      return posts;
  }
};
