import React from 'react';
import Todos from '../../components/todos';
import AddToDo from '../../components/addToDo';

class TodoContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {
                    id: 1,
                    title : 'To do 1',
                    description: 'To do 1 descr'
                },
                {
                    id:2,
                    title : 'To do 2',
                    description: 'To do 2 descr'
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <AddToDo todoList={ this.state.todoList } />
                <Todos todoList={ this.state.todoList }/>
            </div>
        );
    }
}

export default TodoContainer;