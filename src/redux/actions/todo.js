import { FETCH, FETCH_ERROR } from './index';
import axios from 'axios';

export const fetch = () => dispatch => {

    axios.get("http://localhost:5000/todo")
        .then(res => {
            dispatch({ type: FETCH, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_ERROR, payload: err })
        })

}

