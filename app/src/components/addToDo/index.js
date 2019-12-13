import React from 'react';
import AddToDoFormik from './addToDoFormik';


const AddToDo = props => (
  <div className='todo-form'>
            <h1 className='todo-form__title'>Add to do</h1>
            <p className='todo-form__subtitle'>Work in progress.</p>
            <AddToDoFormik/>
        </div>
);

export default AddToDo;