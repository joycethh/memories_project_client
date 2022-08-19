import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  UPDATE_LIKE,
  FETCH_BYSEARCH,
} from "../contants/actionType";
import * as api from "../api";

//Action Creators, api.fectchPosts()

//GET all posts
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    //action is the object, including type and payload
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Get posts by search
export const getPostBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: FETCH_BYSEARCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Create a new post
export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Update a post
export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatedPost);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Delete a post
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

//Update likes
export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  try {
    const { data } = await api.likePost(id, user?.token);
    console.log(data);
    dispatch({ type: UPDATE_LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
