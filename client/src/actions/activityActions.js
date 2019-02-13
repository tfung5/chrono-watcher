import axios from "axios";
import {
  GET_ACTIVITIES,
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  GET_ERRORS
} from "./types";

// GET_ACTIVITIES

export const getActivities = () => {
  return {
    type: GET_ACTIVITIES
  };
};

export const addActivity = newActivity => {
  return {
    type: ADD_ACTIVITY,
    payload: newActivity
  };
};

export const deleteActivity = id => {
  return {
    type: DELETE_ACTIVITY,
    payload: id
  };
};

/* Will be used when linking front end to back end
export const getActivities = (userActivities) => dispatch => {
    axios
        .get('/api/activities', userActivities)
        .then( res => {
            dispatch({
                type: GET_ACTIVITIES,
                payload: userActivities
            })
        })
        .catch( err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}
*/
