import React from 'react';
import AddToDoContainer from '../../containers/addToDoContainer';


const AddToDo = props => (
        <div className='todo-form'>
            <h1 className='todo-form__title'>Add to do</h1>
            <p className='todo-form__subtitle'>Work in progress.</p>
            <AddToDoContainer />
        </div>
);

export default AddToDo;