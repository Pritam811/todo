import './tag.css'
import React from 'react'

export const Tag = ({ tagName , handleTag , checked }) => {

  const tagStyle = {
    Code : {backgroundColor: 'darkslateblue', color:'white'},

    Thesis : {backgroundColor: 'cadetblue', color:'white'},
    
    Books : {backgroundColor: 'salmon', color:'white'},

    Language : {backgroundColor: 'palevioletred', color:'white'},

    default : {backgroundColor: 'whitesmoke'}
  }

  return (

        <button
          type='button'
          style = {checked ? tagStyle [tagName] : tagStyle.default }
          className='tag' 
          onClick = { () => handleTag ( tagName )} > {tagName}
         </button>
  
  )
}
