import React from 'react';
import classes from './TaskItem.module.scss';
import img from '../../img/icons8-trash-can-16.png';

const TaskItem = ({removeTask, taskComplete, id, txt, completeTask, complited}) => {
    return (
    <li className={complited?classes.TaskItemComplited:classes.TaskItemToDo}><p onClick={() => {taskComplete(id)}}>{txt}</p><img src={img} alt='recy' onClick={() => {removeTask(id)}}/></li>
    )
}

export default TaskItem;