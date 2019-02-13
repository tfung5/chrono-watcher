import { GET_ACTIVITIES } from '../actions/types';

const initialState = {
    activities: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        default:
            return state;
    }
}