import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import timelineReducer from './timelineReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    timeline: timelineReducer
});