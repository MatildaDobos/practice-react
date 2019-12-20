import { all, fork, takeLatest } from 'redux-saga/effects';
import { getTodos, getTodoItem, saveTodo, updateTodo } from './todo';
import { types } from '../actions/todos';


// export default function* sagas() {
//     yield all([
//         fork(
//             takeLatest,
//             types.GET_TODO_REQUEST,
//             getTodos
//         ),
//         fork(
//             takeLatest,
//             types.GET_TODO_ITEM_REQUEST,
//             getTodoItem
//         ),
//         fork(
//             takeLatest,
//             types.SAVE_TODO_REQUEST,
//             saveTodo
//         ),
//         fork(
//             takeLatest,
//             types.UPDATE_TODO_REQUEST,
//             updateTodo
//         )
//     ]);
// }


export default function* sagas() {
    yield takeLatest(types.GET_TODO_REQUEST, getTodos);
}
