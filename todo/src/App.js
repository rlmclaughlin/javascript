// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoForm from './Components/Form'

function App() {

  const [todos, setTodos] = useState([]); 

  const deleteHandler = (id) => {
    setTodos(todos.filter(item => item !== id))
  }
  
  return (
    <div className="App">
        <section>
            <img/>
            <TodoForm setTodos={setTodos} todos={todos}/>
        </section>
        <section>
            <TodoList todos={todos} deleteHandler={deleteHandler}/>  
        </section>
    </div>
  );
}

export default App;

