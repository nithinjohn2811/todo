import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  //4
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem('ITEMS')
    if(localValue == null) return []
     return JSON.parse(localValue)
  });

  useEffect(()=>{
     localStorage.setItem('ITEMS',JSON.stringify(todos))
     
  },[todos])
  
  //4end

  function addTodo(title){
    setTodos(currentTodos=>{
      return [...currentTodos,{id:crypto.randomUUID(),title, completed:false}]
    })
  }

  // 6 .onchange on toggle and onclick on delete also part of this toggletodo
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      );
    });
  }

  function deleteTodo(id, completed) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  //6 end

  return (
    <div className="App">
      <TodoForm addTodo = {addTodo}/>
      
      <h1>Todo list</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>

      {/*1 end */}
    </div>
  );
}

export default App;
