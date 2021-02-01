// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import TodoList from './Components/TodoList';

function App() {

  const [todos, setTodos] = useState(["eat","sleep","code","pray","repeat"]); 

  return (
    <div className="App">
      <header className="App-header">
        <div>
         <br/>
          <p>Create a Todo List App</p>
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;
