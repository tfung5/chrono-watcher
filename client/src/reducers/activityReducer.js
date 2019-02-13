import {
  GET_ACTIVITIES,
  ADD_ACTIVITY,
  DELETE_ACTIVITY
} from "../actions/types";
import uuid from "uuid";

const initialState = {
  activities: [
    { id: uuid(), name: "Ate breakfast" },
    { id: uuid(), name: "Ate lunch" },
    { id: uuid(), name: "Ate dinner" },
    { id: uuid(), name: "Ate snack" }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state
      };
    case ADD_ACTIVITY:
      return {
        ...state,
        activities: [action.payload, ...state.activities]
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          activity => activity.id !== action.payload
        )
      };
    default:
      return state;
  }
}
