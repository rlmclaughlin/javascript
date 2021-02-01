import React from 'react'

function Todo(props) {
  
    return (
        <div>
            <p>{props.todo}</p>
            <button onClick={() => props.deleteHandler(props.todo)}>Delete</button>
        </div>
    )
}

export default Todo;

