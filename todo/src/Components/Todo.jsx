import React from 'react'
import './styles/Todo.css'

function Todo(props) {
    return (
        <section class='todo-container'>
            <p>{props.todo}</p>
            <button onClick={() => props.deleteHandler(props.todo)}>X</button>
        </section>
    )
}

export default Todo;

