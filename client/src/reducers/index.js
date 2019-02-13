import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import activityReducer from "./activityReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  activity: activityReducer
});
