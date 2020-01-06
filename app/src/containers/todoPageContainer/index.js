import React from 'react';
import { useParams } from "react-router-dom";
import TodoPage from '../../components/todoPage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../actions/todos';

const TodoPageContainer = (props) => {
    const params = useParams();
    const id = parseInt(params['number']);

    return (
        <div>
            <TodoPage id={ id }/>
        </div>
    );
    
};

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoPageContainer);