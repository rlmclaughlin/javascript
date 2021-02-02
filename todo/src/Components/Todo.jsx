import React from 'react'
import './styles/Todo.css'

function Todo(props) {
    return (
        <section class='todo-container'>
            <p><span>{props.id + 1}.</span> &nbsp; {props.todo} &nbsp;</p>
            <button onClick={() => props.deleteHandler(props.todo)}>X</button>
        </section>
    )
}

export default Todo;

