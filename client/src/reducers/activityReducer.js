import {
  GET_ACTIVITIES,
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  ACTIVITIES_LOADING
} from "../actions/types";

const initialState = {
  activities: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        loading: false
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
          activity => activity._id !== action.payload
        )
      };
    case ACTIVITIES_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
