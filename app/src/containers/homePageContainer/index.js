import React from 'react';
import Todos from '../../components/todos';
import { actions } from '../../actions/todos';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class HomePageContainer extends React.Component {
    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        const todoList = this.props.todoRequest.list;
        console.log('TodoREquestList: ', this.props.todoRequest.list);
        return (
            <div>
            <Todos todoList={ todoList } remove={ this.props.removeTodo } updateStatus={ this.props.updateStatus }/>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    todoRequest: state.todoRequest
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);