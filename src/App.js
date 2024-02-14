import { useState } from "react";
import "./App.css";

function App() {
 //2 //2 end
  const [newItem, setnewItem] = useState()

  //4 

  function handleSubmit(e){
    e.preventDefault()
  }
  //4end

  return (
    <div className="App">
      {/*1 */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">New Item</label>
         {/*3  value and onChange*/}
        <input  value ={newItem} onChange = {e=>setnewItem(e.target.value)}type="text" id="item" />
         {/*3 end */}
        <button className="btn">click</button>
      </form>
      <h1>Todo list</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button>Delete</button>
        </li>

        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button>Delete</button>
        </li>

        <li>
          <label>
            <input type="checkbox" />
            Item 3
          </label>
          <button>Delete</button>
        </li>

      </ul>

      {/*1 end */}
    </div>
  );
}

export default App;
