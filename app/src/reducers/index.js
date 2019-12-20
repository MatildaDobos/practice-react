import { combineReducers } from 'redux';
import todos from './todos';
import todoRequest from './todoRequest';

export default combineReducers({
    todos,
    todoRequest
});