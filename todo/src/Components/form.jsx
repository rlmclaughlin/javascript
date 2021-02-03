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
        if(todo.item === ''){
            console.log("Invalid Submission")
        } else {
            props.setTodos((item) => ([
                ...item,{
                item: todo.item,
                isCompleted: false
            }]))
        }
        setTodo({item: ''})
    }

    return(
        <main>
            <form onSubmit={submitHandler}> 
                <h1>Create a Todo</h1>
                <input name='todo' 
                       placeholder='Insert Todo Here' 
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