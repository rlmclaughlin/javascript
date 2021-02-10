import {useState} from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoForm from './Components/Form'



function App() {

    const [todos, setTodos] = useState([]); 
  
    const deleteHandler = (id) => {
        setTodos(todos.filter(item => item.item !== id))
    }
  
    const deleteAll = () => {
        setTodos(todos.filter(item => !item.item))
    }
    
    const isCompletedHandler = (id, isCompleted) => {
        let newState = [...todos];
        if(!isCompleted){
          newState[id].isCompleted = true;
          setTodos(newState)
        } else {
          newState[id].isCompleted = false
          setTodos(newState)          
        }       
    }

    return (
      <div className="App">
          <section>
              <img/>
              <TodoForm setTodos={setTodos} 
                        objLength = {todos.length}
                        todos={todos}/>
          </section>
          <section>
              <TodoList todos={todos} 
                        isCompletedHandler={isCompletedHandler} 
                        deleteHandler={deleteHandler} 
                        deleteAll={deleteAll}/> 
          </section>
      </div>
    );
}

export default App;

