import React from 'react';
import ToDoCard from '../todoCard';

import './todos.css';

const Todos = props => {
    return (
        <div className='todos'>
            {
                props.todoList.map(todo => 
                    <div className='todos__card' key={ todo.id }>
                        <ToDoCard title={ todo.title } description={ todo.description  }/>
                    </div>
                )
            }
    </div>
    );
};

export default Todos;