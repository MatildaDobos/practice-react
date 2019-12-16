import React from 'react';
import Todos from '../../components/todos';
import { connect } from 'react-redux';
import { actions } from '../../actions/todos';

class TodoContainer extends React.Component {

    render() {
        const todoList = this.props.todos.list;
        return (
            <div>
                <Todos todoList={ todoList } />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    removeTodo: id => dispatch(actions.removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);