import { types } from '../actions/todo';

let todos = [];
const initialState = {
    id: 1,
    title: 'Test',
    description: 'Test descr'
};

const todo = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TODO:
            const id = todos.length+1;
            todos.push({
                ...action.payload,
                id
            });
            console.log('Todos: ', todos);
            return {
                ...state
            };
        case types.REMOVE_TODO:
            let filtered = todos.filter((item) => {
                return item.id === state.id;
            });
            todos = filtered;
            return {
                ...state
            };
        default:
            return state;
    }
}

export default todo;