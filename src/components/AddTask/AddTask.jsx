import React from 'react'
import './addTask.css'
import { Tag } from '../Tag/Tag'
import { useState } from 'react'

export const AddTask = ({setTasks}) => {
    
    const [taskData,setTaskData]= useState({
        task:'',
        status:'todo',
        tags:[]
    });

    const handleTag = (tag) => {
        if(taskData.tags.some(item => item === tag)){
            const filterTags = taskData.tags.filter(item => item!==tag)
            setTaskData(prev => {
                return{...prev,tags:filterTags}
        
            })
        }
        else{
            setTaskData(prev =>{
                return{...prev, tags:[...prev.tags,tag]}
            })
        
        }
        
    }
    
    const checkTag = (tag) => {
        return(taskData.tags.some(item => item === tag))
    }
    
    
    const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setTaskData(prev =>{
        return{...prev, [name]:value}
    })
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log(taskData)
    setTasks((prev) => {
        return [...prev, taskData]
    })
    setTaskData (
        {
            task:'',
            status:'todo',
            tags:[]
        }
    )
    
   }

    
    
    
   /*const [task, setTask]= useState('')
    const [status, setStatus]= useState('todo')

    const handleTask = (e) =>{
        setTask(e.target.value)
    }
    const handleStatus = (e) =>{
        setStatus(e.target.value)
    }*/

  
    return (
    <>
    <div className='todo_addTask'>
        <header className='todo_header'>
            <form action="todo_form" onSubmit={handleSubmit}>
                <input 
                    name='task'
                    type="text"
                    value={taskData.task}
                    className='todo_input'
                    placeholder='Write a task'
                    onChange={handleChange}
                 />

                <div className='task_type'>
                    
                    <div>
                        <Tag tagName='Code' handleTag = {handleTag} checked = {checkTag('Code')} />
                        <Tag tagName='Thesis' handleTag = {handleTag} checked = {checkTag('Thesis')}/>
                        <Tag tagName='Books' handleTag = {handleTag} checked = {checkTag('Books')}/>
                        <Tag tagName='Language' handleTag = {handleTag} checked = {checkTag('Language')}/>
                    </div>
                    
                    <div>
                        <select
                            name='status'
                            value={taskData.status}
                            className='task_status' onChange={handleChange}>
                            <option value="todo">To Do</option>
                            <option value="doing">Running</option>
                            <option value="done">Finished</option>
                        </select>
                        <button type='submit' className='task_submit'>ADD</button>
                    </div>

                </div>
            </form>
        </header>
    </div>
    </>  )
}
