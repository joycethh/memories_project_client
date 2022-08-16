import { AUTH } from "../contants/actionType";

import * as api from "../api";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    //login in the user
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    //signup the user
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
