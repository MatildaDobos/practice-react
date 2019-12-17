import React from 'react';
import ToDoCard from '../todoCard';

import './todos.css';

const Todos = props => {
    const hasTodos = props.todoList !== undefined && props.todoList.length > 0;
    if(hasTodos) {
        return (
            <div className='todos'>
                {
                    props.todoList.map(todo => 
                        <div className='todos__card' key={ todo.id }>
                            <ToDoCard title={ todo.title } description={ todo.description } id={todo.id} remove={ () => props.remove(todo.id) }/>
                        </div>
                    )
                }
        </div>
        );
    }
    return (
        <div className='todos'>
            <h3>No todos.</h3>
        </div>
    );
    
};

export default Todos;