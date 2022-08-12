import * as api from "../api";

//Action Creators, api.fectchPosts()

//GET all posts
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    //action is the object, including type and payload
    dispatch({ type: "FETCH_ALL", payload: data });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//Create a new post
export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Update a post
export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatedPost);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
