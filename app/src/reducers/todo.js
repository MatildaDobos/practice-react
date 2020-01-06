import { types } from '../actions/todos';

const initialState = {
    item: null,
    error: false,
    loading: false
};

const todo = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_TODO_ITEM_REQUEST:
            return {
                ...state,
                item: null,
                error: false,
                loading: true
            };
        case types.GET_TODO_ITEM_REQUEST_SUCCESS:
            return {
                ...state,
                item: action.payload,
                error: false,
                loading: false
            };
        case types.GET_TODO_ITEM_REQUEST_FAILURE:
            return {
                ...state,
                item: null,
                error: true,
                loading: false
            };

        case types.UPDATE_TODO_REQUEST:
                return {
                    ...state,
                    error: false,
                    loading: true
                };
        case types.UPDATE_TODO_REQUEST_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false
            };
        case types.UPDATE_TODO_REQUEST_FAILURE:
                return {
                    ...state,
                    error: true,
                    loading: false
                };
        default:
            return state;
    }
}

export default todo;