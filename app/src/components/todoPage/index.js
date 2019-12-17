import React from 'react';
import ToDoCard from '../todoCard';

const TodoPage = (props) => {
    return (
       <div>
            <div>This is the todo page</div>
            <ToDoCard title={ props.title } description={ props.description } id={props.id}/>
       </div>
    );
    
};

export default TodoPage;