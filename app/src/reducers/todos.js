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
                const updateState = Array.from(state);
                updateState.forEach((item, index) => {
                    if(item.id === action.payload.id) {
                        updateState[index] = action.payload
                        return;
                    }
                });
                
                return updateState;
        case types.UPDATE_STATUS_TODO:
                const updateStatusState = Array.from(state);
                updateStatusState.forEach((item, index) => {
                    if(item.id === action.id) {
                        updateStatusState[index].status = action.status
                        return;
                    }
                });
                
                return updateStatusState;
        default:
            return state;
    }
}

export default todos;