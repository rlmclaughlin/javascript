// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import Form from './Components/Form'

function App() {

  const [todos, setTodos] = useState([]); 

  const deleteHandler = (id) => {
    setTodos(todos.filter(item => item !== id))
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
         <br/>
          <p>Todo List</p>
          <Form setTodos={setTodos} todos={todos}/>
          <TodoList todos={todos} deleteHandler={deleteHandler}/>
        </div>
      </header>
    </div>
  );
}

export default App;

