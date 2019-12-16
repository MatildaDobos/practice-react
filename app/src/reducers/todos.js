import { types } from '../actions/todos';
import Todos from '../utils/todos';


const initialState = [];

const todos = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TODO:
            Todos.add(action.payload);
            return {
                ...state,
                list: Todos.getList()
            };
        case types.REMOVE_TODO:
            Todos.remove(action.payload.id);
            return {
                ...state,
                list: Todos.getList()
            };
        default:
            return state;
    }
}

export default todos;