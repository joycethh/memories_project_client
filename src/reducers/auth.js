import { AUTH, LOGOUT } from "../contants/actionType";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      //action.data is the result and token const we got in Auth.js
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      console.log(action.data);
      return state;
    default:
      console.log(state);
      return state;
  }
};

export default authReducer;
