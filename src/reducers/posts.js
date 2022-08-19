import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  UPDATE_LIKE,
  FETCH_BYSEARCH,
} from "../contants/actionType";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_BYSEARCH:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case UPDATE_LIKE: {
      console.log(action);
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    }
    case DELETE:
      return posts.filter((restPosts) => restPosts._id !== action.payload);
    default:
      return posts;
  }
};
