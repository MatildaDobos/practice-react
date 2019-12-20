
let id = 1;

export const types = {
    ADD_TODO: 'ADD_TODO',
    EDIT_TODO: 'EDIT_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    UPDATE_STATUS_TODO: 'UPDATE_STATUS_TODO',

    GET_TODO_REQUEST: 'GET_TODO_REQUEST',
    GET_TODO_REQUEST_SUCCESS: 'GET_TODO_REQUEST_SUCCESS',
    GET_TODO_REQUEST_FAILURE: 'GET_TODO_REQUEST_FAILURE',

    GET_TODO_ITEM_REQUEST: 'GET_TODO_ITEM_REQUEST',
    GET_TODO_ITEM_REQUEST_SUCCESS: 'GET_TODO_ITEM_REQUEST_SUCCESS',
    GET_TODO_ITEM_REQUEST_FAILURE: 'GET_TODO_ITEM_REQUEST_FAILURE',

    SAVE_TODO_REQUEST: 'SAVE_TODO_REQUEST',
    SAVE_TODO_REQUEST_SUCCESS: 'SAVE_TODO_REQUEST_SUCCESS',
    SAVE_TODO_REQUEST_FAILURE: 'SAVE_TODO_REQUEST_FAILURE',

    UPDATE_TODO_REQUEST: 'UPDATE_TODO_REQUEST',
    UPDATE_TODO_REQUEST_SUCCESS: 'UPDATE_TODO_REQUEST_SUCCESS',
    UPDATE_TODO_REQUEST_FAILURE: 'UPDATE_TODO_REQUEST_FAILURE'
}

export const actions = {
    getTodos: list => ({
        type: types.GET_TODO_REQUEST,
        payload: list
    }),
    addToDo: list => ({
        type: types.ADD_TODO,
        payload: {
            ...list,
            id: id++,
            status: ''
        }
    }),
    editToDo: list => ({
        type: types.EDIT_TODO,
        payload: list
    }),
    removeTodo: id => ({
      type: types.REMOVE_TODO,
      id: id
    }),
    updateStatus: (id, status) => ({
        type: types.UPDATE_STATUS_TODO,
        id: id,
        status: status
      })
};