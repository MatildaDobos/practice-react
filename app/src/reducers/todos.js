import { types } from '../actions/todos';

let list = [];

function add(item){
    list.push(item);
};

function remove(id) {
    let filtered = list.filter((item) => {
        return item.id === id;
    });
    list = filtered;
};

const initialState = [];

const todos = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TODO:
            add(action.payload);
            return {
                ...state,
                list: list
            };
        case types.REMOVE_TODO:
            remove(action.payload.id);
            return {
                ...state,
                list: list
            };
        default:
            return state;
    }
}

export default todos;