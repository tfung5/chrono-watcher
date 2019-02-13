import axios from 'axios';
import {
    GET_ACTIVITIES,
    GET_ERRORS
} from './types/';

// GET_ACTIVITIES
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