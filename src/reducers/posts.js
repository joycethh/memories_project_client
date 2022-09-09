import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  UPDATE_LIKE,
  FETCH_BYSEARCH,
  START_LOADING,
  END_LOADING,
  FETCH_SINGLE,
} from "../contants/actionType";
//as we receive object of data back from actions.
//we want to rename the posts to state, and spread state data, define posts to action.payload
export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case END_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.postData,
        currentPage: action.payload.currentPage,
        numberOfPage: action.payload.numberOfPage,
      };
    case FETCH_SINGLE:
      return {
        ...state,
        post: action.payload,
      };
    case FETCH_BYSEARCH:
      return {
        ...state,
        posts: action.payload,
      };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          state._id === action.payload._id ? action.payload : post
        ),
      };
    // case UPDATE_LIKE: {
    //   console.log(action);
    //   return {
    //     ...state,
    //     posts: state.posts.map((post) =>
    //       post._id === action.payload._id ? action.payload : post
    //     ),
    //   };
    // }
    case UPDATE_LIKE: {
      console.log("like action", action);
      return {
        ...state,
        posts: state.posts.map((post) =>
          state._id === action.payload._id ? action.payload : post
        ),
      };
    }
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter(
          (restPosts) => restPosts._id !== action.payload
        ),
      };

    default:
      return state;
  }
};
