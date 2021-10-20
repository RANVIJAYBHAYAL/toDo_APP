import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="d-flex justify-content-center">
    <ul className="list-group w-25"
    
      onDoubleClick={() => deleteTodo(todo.id)} 
      style={{ cursor: 'pointer' ,marginTop:20}}
     >
      <li className="list-group-item"> {todo.title}</li>
     </ul>

     </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoItem