import React from 'react';
import Todos from '../../components/todos';
import { connect } from 'react-redux';
import { actions } from '../../actions/todos';
import { bindActionCreators } from 'redux';

const TodoContainer = props => {
    const todoList = props.todos;
    return (
        <div>
            <Todos todoList={ todoList } remove={ props.removeTodo }/>
        </div>
    );
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);