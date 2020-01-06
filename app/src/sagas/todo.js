import TodoApi from '../api/todo';
import { call, put, take } from 'redux-saga/effects';
import { types, actions } from '../actions/todos';


export function* getTodos() {
    try {
        const todos = yield call(TodoApi.getTodoList);
        yield put({ type: types.GET_TODO_REQUEST_SUCCESS, payload:  todos });
    } catch (error) {
        yield put({ type: types.GET_TODO_REQUEST_FAILURE });
    }
}


export function* getTodoItem(action) {
    try {
        const todo = yield call(TodoApi.getTodoById, action.payload);
        yield put({ type: types.GET_TODO_ITEM_REQUEST_SUCCESS, payload:  todo });
    } catch (error) {
        yield put({ type: types.GET_TODO_ITEM_REQUEST_FAILURE });
    }
}

export function* saveTodo() {
    try {
        yield call(TodoApi.addTodo);
        yield put({ type: types.SAVE_TODO_REQUEST_SUCCESS });
    } catch (error) {
        yield put({ type: types.SAVE_TODO_REQUEST_FAILURE });
    }
}

export function* updateTodo() {
    try {
        yield call(TodoApi.updateTodo);
        yield put({ type: types.UPDATE_TODO_REQUEST_SUCCESS });
    } catch (error) {
        yield put({ type: types.UPDATE_TODO_REQUEST_FAILURE });
    }
}