import { ADD, ADD_ERROR } from './index';
import axios from 'axios';

export const add = (data) => dispatch => {

    axios.post("http://localhost:5000/todo", data)
        .then(res => {

            dispatch({ type: ADD, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: ADD_ERROR, payload: err });
        })
}