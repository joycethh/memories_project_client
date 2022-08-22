import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  UPDATE_LIKE,
  FETCH_BYSEARCH,
  START_LOADING,
  END_LOADING,
} from "../contants/actionType";
import * as api from "../api";

//Action Creators, api.fectchPosts()

//GET all posts
export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts(page); //data object includes postData, current page, total number of pages
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

//GET all posts
export const getSinglePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(id);
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Get posts by search
export const getPostBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: FETCH_BYSEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

//Create a new post
export const createPost = (newPost) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
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
