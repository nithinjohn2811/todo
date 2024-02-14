import React from 'react'

const TodoItem = ({completed,id,title,toggleTodo,deleteTodo}) => {
  return (
    <div> <li key={id}>
    <label>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      {title}
    </label>
    <button onClick={()=>deleteTodo(id)}>Delete</button>
  </li></div>
  )
}

export default TodoItem