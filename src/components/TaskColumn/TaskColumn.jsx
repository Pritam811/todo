import React from 'react'
import './taskColumn.css'
import { TaskField } from '../TaskField/TaskField'
export const TaskColumn = ({heading,image,tasks,status,handleDelete}) => {
  return (
   
    <section className='todo_taskList'>
        <h3 className='task_header'>
            <img className='task_icon' src={image} alt="" />{heading}
        </h3>
        {tasks.map((task,index)=>
           task.status === status && 
           <TaskField
            key = {index} 
            heading ={task.task}
            tags={task.tags}
            handleDelete = {handleDelete}
            index = {index}
            />  )}
        
    </section>
  )
}

