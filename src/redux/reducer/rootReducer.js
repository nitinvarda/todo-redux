import { combineReducers } from 'redux';
import Add from './Add';
import Delete from './Delete';
import Fetch from './Fetch';


export default combineReducers({
    Add,
    Delete,
    Fetch
})