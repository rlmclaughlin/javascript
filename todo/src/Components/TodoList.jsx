import React from 'react'
import Todo from './Todo.jsx'


function TodoList(props){
    
    return(
        props.todos.map((item, index) => 
           <Todo todo={item} key={index}/>  
        )
        
    )
}

export default TodoList