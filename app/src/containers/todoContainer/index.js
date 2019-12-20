import React from 'react';
import Todos from '../../components/todos';
import { connect } from 'react-redux';
import { actions } from '../../actions/todos';
import { bindActionCreators } from 'redux';

class TodoContainer extends React.Component {
    componentDidMount() {
        this.props.getTodos();
    }
    
    render() {
        const todoList = this.props.todos.list;
    return (
        <div>
            <Todos todoList={ todoList } remove={ this.props.removeTodo } updateStatus={ this.props.updateStatus }/>
        </div>
    );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);