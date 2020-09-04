import { DELETE, DELETE_ERROR } from './index';
import axios from 'axios';

export const del = (id) => dispatch => {

    axios.delete("http://localhost:5000/todo/" + id)
        .then(res => {

            dispatch({ type: DELETE, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: DELETE_ERROR, payload: err });
        })
}