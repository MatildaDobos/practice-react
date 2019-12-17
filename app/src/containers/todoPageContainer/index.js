import React from 'react';
import { useParams } from "react-router-dom";
import TodoPage from '../../components/todoPage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../actions/todos';

const TodoPageContainer = (props) => {
    const params = useParams();
    const id = params['number'];

    const todoFilter = props.todos.filter( item => {
        return item.id == id;
    });

    if(todoFilter.length > 0) {
        const todo = todoFilter[0];
        return (
            <div>
                <TodoPage id={ id }/>
            </div>
        );
    }
    return (
        <div>To do with id { id } is not found</div>
    );
    
};

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoPageContainer);