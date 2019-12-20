import { types } from '../actions/todos';

const initialState = {
    list: [],
    error: false,
    loading: false
};

const todoRequst = (state = initialState, action) => {
    switch(action.type) {
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

export default todoRequst;