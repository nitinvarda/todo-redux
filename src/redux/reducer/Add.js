import { ADD, ADD_ERROR } from '../actions/index';

const initialState = {
    added_data: ''
}


export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD:
            console.log(payload)
            return {
                ...state,
                added_data: payload

            }
        case ADD_ERROR:
            return {
                ...state,
                added_data: payload
            }
        default:
            return state;
    }
}