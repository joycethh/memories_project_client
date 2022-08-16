import { AUTH, LOGOUT } from "../contants/actionType";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      //action.data is the result and token const we got in Auth.js
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
