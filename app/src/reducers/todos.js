import { types } from '../actions/todos';

const initialState = {
    list: [],
    error: false,
    loading: false
};

const todos = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TODO:
            return {
                ...state,
                list: state.list.concat(action.payload)
            };
        case types.REMOVE_TODO:
            const updateList = state.list.filter((item) => {
                    return item.id !== action.id;
                });
            return {
                ...state,
                list: updateList
            };
            case types.EDIT_TODO:
                const updateState = Array.from(state.list);
                updateState.forEach((item, index) => {
                    if(item.id === action.payload.id) {
                        updateState[index] = action.payload
                        return;
                    }
                });
                
                return {
                  ...state,
                  list: updateState  
                };
        case types.UPDATE_STATUS_TODO:
                const updateStatusState = Array.from(state.list);
                updateStatusState.forEach((item, index) => {
                    if(item.id === action.id) {
                        updateStatusState[index].status = action.status
                        return;
                    }
                });
                
                return {
                    ...state,
                    list: updateStatusState
                };
        case types.GET_TODO_REQUEST:
                return {
                    ...state,
                    list: [],
                    error: false,
                    loading: true
                };
        case types.GET_TODO_REQUEST_SUCCESS:
            return {
                ...state,
                list: action.payload,
                error: false,
                loading: false
            };
        case types.GET_TODO_REQUEST_FAILURE:
                return {
                    ...state,
                    list: [],
                    error: true,
                    loading: false
                };
        default:
            return state;
    }
}

export default todos;