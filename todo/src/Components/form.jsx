import React, {useState} from 'react' 
import './styles/Form.css'


function TodoForm(props){

    const [todo, setTodo] = useState({item: ''})

    const changeHandler = (e) => {
        e.persist()
        setTodo((items) => ({
            ...items,
            item: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.setTodos((item) => ([
            ...item,
            todo.item
        ]))
        setTodo({item: ''})
    }

    return(
        <main>
            <h2>Todo List</h2>
            <form onSubmit={submitHandler}> 
                <input name='todo' 
                       placeholder='todo here' 
                       value={todo.item} 
                       type='text' 
                       onChange={changeHandler}/>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </main>
    )
}

export default TodoForm