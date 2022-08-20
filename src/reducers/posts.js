import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  UPDATE_LIKE,
  FETCH_BYSEARCH,
} from "../contants/actionType";
//as we receive object of data back from actions.
//we want to rename the posts to state, and spread state data, define posts to action.payload
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.postData,
        currentPage: action.payload.currentPage,
        numberOfPage: action.payload.numberOfPage,
      };
    case FETCH_BYSEARCH:
      return {
        ...state,
        posts: action.payload,
      };
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
      return state.map((post) =>
        state._id === action.payload._id ? action.payload : post
      );
    case UPDATE_LIKE: {
      console.log(action);
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    }
    case DELETE:
      return state.filter((restPosts) => restPosts._id !== action.payload);
    default:
      return state;
  }
};
