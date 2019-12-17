
let id = 1;

export const types = {
    ADD_TODO: 'ADD_TODO',
    EDIT_TODO: 'EDIT_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    UPDATE_STATUS_TODO: 'UPDATE_STATUS_TODO'
}

export const actions = {
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