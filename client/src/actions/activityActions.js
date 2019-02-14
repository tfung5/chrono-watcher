import axios from "axios";
import {
  GET_ACTIVITIES,
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  ACTIVITIES_LOADING
} from "./types";

// GET_ACTIVITIES

export const getActivities = () => dispatch => {
  dispatch(setActivitiesLoading());
  axios.get("/api/activities").then(res =>
    dispatch({
      type: GET_ACTIVITIES,
      payload: res.data
    })
  );
};

export const addActivity = newActivity => dispatch => {
  axios.post("/api/activities", newActivity).then(res =>
    dispatch({
      type: ADD_ACTIVITY,
      payload: res.data
    })
  );
};

export const deleteActivity = id => dispatch => {
  axios.delete(`/api/activities/${id}`).then(res =>
    dispatch({
      type: DELETE_ACTIVITY,
      payload: id
    })
  );
};

export const setActivitiesLoading = () => {
  return {
    type: ACTIVITIES_LOADING
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
