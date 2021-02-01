import React from 'react'

function Todo(props) {
    console.log(props.todo)
    return (
        <div>
            <p>{props.todo}</p>
        </div>
    )
}

export default Todo;

