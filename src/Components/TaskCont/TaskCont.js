import React from 'react';
import classes from './TaskCont.module.scss';
import TaskItem from '../TaskItem/TaskItem'


const TaskCont = ({flag, title, someTasks, toggleInput, addTask, removeTask, taskComplete}) => {
 
    return (
        <div className={classes.TaskContainer}>
          <h1 className={classes.Title}>{title}</h1>
            <ul className={classes.tasks}>
                {someTasks.map((element) => {
                        return <TaskItem key={element.id} txt={element.text} id={element.id} removeTask={removeTask} complited={element.complited} taskComplete={taskComplete}/>
                })}
            </ul>
            <div className={classes.Form}>
                <div> {flag?<input className={classes.inp} onKeyPress={event => {addTask(event)}}/>:null}</div> <div><p className={classes.add} onClick={toggleInput}>+</p></div>
            </div>
        </div>
    );
}

export default TaskCont;