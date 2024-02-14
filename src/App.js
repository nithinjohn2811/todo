import { useState } from "react";
import "./App.css";

function App() {
  //2 //2 end
  const [newItem, setnewItem] = useState();
  //4
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    //anytime we want to pass acurrent value,pass a function or else pass a value like e.target.value
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setnewItem("");
  }
  //4end

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
      {/*1 */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">New Item</label>
        {/*3  value and onChange*/}
        <input
          value={newItem}
          onChange={(e) => setnewItem(e.target.value)}
          type="text"
          id="item"
        />
        {/*3 end */}
        <button className="btn">click</button>
      </form>
      <h1>Todo list</h1>
      <ul className="list">
        {/*5 */}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button>Delete</button>
            </li>
          );
        })}

        {/*5 end */}
      </ul>

      {/*1 end */}
    </div>
  );
}

export default App;
