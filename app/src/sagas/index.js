import { all, takeLatest } from 'redux-saga/effects';
import { getTodos, getTodoItem, saveTodo, updateTodo } from './todo';
import { types } from '../actions/todos';

export default function* sagas() {
    yield all([
        takeLatest(types.GET_TODO_REQUEST, getTodos),
        takeLatest(types.GET_TODO_ITEM_REQUEST, getTodoItem),
        takeLatest(types.SAVE_TODO_REQUEST, saveTodo),
        takeLatest(types.UPDATE_TODO_REQUEST, updateTodo)
    ]);
}
