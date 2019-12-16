import React from 'react';
import Todos from '../../components/todos';
import { connect } from 'react-redux';
import { actions } from '../../actions/todos';

class TodoContainer extends React.Component {

    render() {
        console.log('Todos: ', this.props.todos);
        return (
            <div>
                <Todos todoList={ this.props.todos } />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos.list
});

const mapDispatchToProps = dispatch => ({
    removeTodo: id => dispatch(actions.removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);