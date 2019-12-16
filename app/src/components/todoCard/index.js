import React from 'react';
import removeIcon from '../../img/remove_icon.svg';

import './todoCard.css';

const ToDoCard = props => (
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
            <span className='todo-info__name'>Created:</span>
            <span className='todo-info__value'>28 May 2019</span>
        </div>
    </div>
);

export default ToDoCard;