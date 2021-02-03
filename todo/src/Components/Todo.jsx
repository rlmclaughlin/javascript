import React  from 'react'
import './styles/Todo.css'

function Todo(props) {
   
    return(
        <section className='todo-container'>
            <span>{props.id + 1}.</span> 
            <p className={props.completed === false ? "basic" : "completed"} onClick={() => props.isCompletedHandler(props.id, props.completed)}>{props.todo}</p>
            <button onClick={() => props.deleteHandler(props.todo)}>X</button>
        </section>
    )
}

export default Todo;

