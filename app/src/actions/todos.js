let id = 1;

export const types = {
    ADD_TODO: 'ADD_TODO',
    EDIT_TODO: 'EDIT_TODO',
    REMOVE_TODO: 'REMOVE_TODO'
}

export const actions = {
    addToDo: list => ({
        type: types.ADD_TODO,
        payload: {
            ...list,
            id: id++
        }
    }),
    editToDo: list => ({
        type: types.EDIT_TODO,
        payload: list
    }),
    removeTodo: id => ({
      type: types.REMOVE_TODO,
      id: id
    })
};