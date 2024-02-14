import React,{useState} from 'react'

 //4
 

const TodoForm = ({addTodo}) => {
    const [newItem, setnewItem] = useState();


    function handleSubmit(e) {
        e.preventDefault();
        addTodo(newItem)
        //anytime we want to pass acurrent value,pass a function or else pass a value like e.target.value
        // setTodos((currentTodos) => {
        //   return [
        //     ...currentTodos,
        //     { id: crypto.randomUUID(), title: newItem, completed: false },
        //   ];
        // });
    
        setnewItem("");
      }
  
 //4end
  return (
    <div>
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
    </form></div>
  )
}

export default TodoForm