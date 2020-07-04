import React, {useState}from 'react';
import classes from  './TodoBody.module.scss';
import Nav from '../Nav/Nav';
import { Route } from 'react-router-dom';
import TaksPage from '../../Pages/TaksPage/TaskPage'

const TodoBody = props => {

  const [homeTasks, setHomeTask] = useState([])
  const [workTasks, setWorkTasks] = useState([])
  const [univerTasks, setUniverTasks] = useState([])

  return (

    <>
      <div className={classes.todoBody}>
        <Nav />
        <Route path='/' exact component={() => <TaksPage someTasks={homeTasks} setSomeTask={setHomeTask} title='Home Tasks'/>}/>
        <Route path='/work' component={() => <TaksPage someTasks={workTasks} setSomeTask={setWorkTasks} title='Work Tasks'/>}/>
        <Route path='/univer' component={() => <TaksPage someTasks={univerTasks} setSomeTask={setUniverTasks} title='University Tasks'/>}/>
      </div>
    </>
  );
}

export default TodoBody;
