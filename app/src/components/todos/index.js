import React from 'react';
import ToDoCard from '../todoCard';

import './todos.css';

const Todos = props => {
    const todoList = [
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
    ];
    return (
        <div className='todos'>
            {
                todoList.map(todo => 
                    <div className='todos__card' key={ todo.id }>
                        <ToDoCard title={ todo.title } description={ todo.description  }/>
                    </div>
                )
            }
    </div>
    );
};

export default Todos;