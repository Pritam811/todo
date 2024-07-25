import React, { useEffect, useState } from 'react'
import './home.css'
import { AddTask } from '../AddTask/AddTask'
import { TaskColumn } from '../TaskColumn/TaskColumn'
import todo from '../../assets/todo.jpg'
import doing from '../../assets/doing.png'
import done from '../../assets/done.png'

const oldTasks = localStorage.getItem('tasks');

export const Home = () => {
  const [tasks,setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() =>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])

 
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task,index) => index !==taskIndex)
    setTasks (newTasks);
  }
  return (
    <div className='todo_home'>
        <AddTask setTasks = {setTasks}/>
        <main className='todo_main'>
          <TaskColumn heading='To Do' image={todo} tasks={tasks} status='todo' handleDelete = {handleDelete}/>
          <TaskColumn heading='Running' image={doing} tasks={tasks} status='doing' handleDelete = {handleDelete}/>
          <TaskColumn heading='Finished' image={done} tasks={tasks} status='done' handleDelete = {handleDelete}/>
            

        </main>
    </div>
  )
}
