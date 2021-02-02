import React from 'react'
import Todo from './Todo.jsx'
import './styles/TodoList.css'


function TodoList(props){
    
    return(
        <div>{!props.todos.length ? <h2 className="color">Please Enter A Todo...</h2> :
             <h1 className='todolist-header'>List of Todos</h1> }
             {props.todos.map((item, index) => 
             <Todo todo={item} key={index} id={index} deleteHandler={props.deleteHandler}/>  
             )}
        </div>
    )
}

export default TodoList