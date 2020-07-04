import React, { useState } from 'react';
import TaskCont from '../../Components/TaskCont/TaskCont';



const TaksPage = ({someTasks, setSomeTask, title}) => {

    const [flag, setFlag] = useState(false)

    const toggleInput = () => {
        if (flag === false) {
            setFlag(true)
        } else {
            setFlag(false)
        }
    }

    const addTask = event => {
        if (event.key === "Enter") {
          setSomeTask([
                ...someTasks, 
                {id: Date.now().toString(), text: event.target.value, complited: false}])
        }
    }
    
  const removeTask = (id) => {
    setSomeTask(someTasks.filter(task => task.id !== id))
}

  const taskComplete = id => {
    setSomeTask(someTasks.map(task => {
      if (task.id === id) {
        task.complited = !task.complited
      }
      return task
    }))
  }


    return (
        <TaskCont
            flag={flag}
            someTasks={someTasks}
            toggleInput={toggleInput}
            title={title}
            addTask={addTask}
            removeTask={removeTask}
            taskComplete={taskComplete}
            
        />
    );
}

export default TaksPage;