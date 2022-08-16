import { AUTH, LOGOUT } from "../contants/actionType";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      console.log(action?.data);
      return state;
    case LOGOUT:
      console.log(action.data);
      return state;
    default:
      console.log(state);
      return state;
  }
};

export default authReducer;
