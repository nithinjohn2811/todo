
import './App.css';

function App() {
  return (
    <div className="App">
    {/*1 */}
      <form>
        <label htmlFor='item'>New Item</label>
        <input type = "text" id = 'item'/>
        <button className='btn'>click</button>
      </form>
      <h1>Todo list</h1>

      {/*1 end */}
     
    </div>
  );
}

export default App;
