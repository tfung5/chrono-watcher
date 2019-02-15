import axios from "axios";
import {
  GET_ACTIVITIES,
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  ACTIVITIES_LOADING,
  GET_ERRORS,
  CLEAR_ERRORS
} from "./types";

export const getActivities = currentUser => dispatch => {
  dispatch(setActivitiesLoading());
  axios
    .get("/api/activities", {
      params: { email: currentUser.email }
    })
    .then(res =>
      dispatch({
        type: GET_ACTIVITIES,
        payload: res.data
      })
    );
};

export const addActivity = newActivity => dispatch => {
  axios
    .post("/api/activities", newActivity)
    .then(res =>
      dispatch({
        type: ADD_ACTIVITY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
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

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
