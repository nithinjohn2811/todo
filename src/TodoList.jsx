import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({todos,toggleTodo,deleteTodo}) => {
  return (
    <div>
        <ul className="list">
        {/*5 */}
        {todos.map((todo) => {
          return (
           <TodoItem key = {todo.id}{...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          );
        })}

        {/*5 end */}
      </ul>
    </div>
  )
}

export default TodoList