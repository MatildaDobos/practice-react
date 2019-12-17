import { types } from '../actions/todos';

const todos = (state = [], action) => {
    switch(action.type) {
        case types.ADD_TODO:
            return state.concat(action.payload);
        case types.REMOVE_TODO:
            return state.filter((item) => {
                return item.id !== action.id;
            });
            case types.EDIT_TODO:
                const updateState = state;
                updateState.forEach((item, index) => {
                    if(item.id == action.payload.id) {
                        updateState[index] = action.payload
                        return;
                    }
                });
                
                return updateState;
        default:
            return state;
    }
}

export default todos;