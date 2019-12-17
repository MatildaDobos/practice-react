import React from 'react';
import removeIcon from '../../img/remove_icon.svg';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import './todoCard.css';

const todoStatusOptions = [
    { value: 'todo', label: 'To do' },
    { value: 'inprogress', label: 'In progress' },
    { value: 'done', label: 'Done' }
];

const ToDoCard = props => {
    console.log('ToDoCard: ', todoStatusOptions);
    let status = todoStatusOptions[0];
    if (props.status) {
        status = todoStatusOptions.find(x => x.value === props.status);
    }
    return (
        <div className='todo-info'>
            <div className='todo-info__header'>
                
                    <h1 className='todo-info__header__title'>{ props.title }</h1>
                    <h3 className='todo-info__header__flag'>Priority is high</h3>
                
                <img onClick={ props.remove } src={ removeIcon } alt='Remove icon' className='todo-info__header__remove'/>
            </div>
            <div className='todo-info__body'>
                <p className='todo-info__body__description'>{ props.description }</p>
            </div>
            <div className='todo-info__footer'>
                <div className='todo-info__footer__status'>
                    <div className='todo-info__name'>Status: </div>
                    <div className='todo-info__value'>
                        <Select 
                            value={ status } 
                            onChange={ (selectedOption) => props.onStatusChange(props.id, selectedOption.value) } 
                            options={ todoStatusOptions } 
                        />
                    </div>
                </div>
                <Link to={`/todo/${props.id}`}><div className='todo-info__footer__link'>Edit</div></Link>
            </div>
        </div>
    );
};

export default ToDoCard;