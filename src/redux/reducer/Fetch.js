

import { FETCH_ERROR, FETCH } from '../actions/index';

const initialState = {
    fetched_data: []
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case FETCH:
            return {
                ...state,
                fetched_data: payload
            }
        case FETCH_ERROR:
            return {
                ...state,
                fetched_data: 'error'
            }
        default:
            return state
    }
}