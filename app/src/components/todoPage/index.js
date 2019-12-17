import React from 'react';
import EditToDoContainer from '../../containers/editTodoContainer';

const TodoPage = props => {
    return (
       <div>
            <EditToDoContainer id={props.id}/>
       </div>
    );
    
};

export default TodoPage;