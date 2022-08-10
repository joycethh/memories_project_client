import * as api from "../api";

// api.fetchPosts

//Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    //action is the object, including type and payload
    dispatch({ type: 'FETCH_ALL"', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
