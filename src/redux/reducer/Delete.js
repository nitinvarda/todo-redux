
import { DELETE, DELETE_ERROR } from '../actions/index';

const initialState = {
    deleted_data: ''
}


export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case DELETE:
            console.log(payload)
            return {
                ...state,
                deleted_data: payload

            }
        case DELETE_ERROR:
            return {
                ...state,
                deleted_data: payload
            }
        default:
            return state;
    }
}