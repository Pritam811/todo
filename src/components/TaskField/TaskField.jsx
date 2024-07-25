import { Tag } from '../Tag/Tag'
import './taskField.css'
import remove from '../../assets/remove.png'
import React from 'react'

export const TaskField = ({heading,tags,handleDelete,index}) => {
  return (
    <div className='taskField'>
        <p className='task_name'>{heading}</p>

        <div className='sub_task'>
        
            <div className='task_tags'>
                {tags.map((tag,index)=> <Tag key ={index} tagName={tag} checked={true}/>)}
            </div>

            <div className='task_delete' onClick={()=>handleDelete(index)}>
                <img className='delete_icon' src={remove} alt="" />
            </div>
        
        </div>

        
    </div>
    
  )
}
