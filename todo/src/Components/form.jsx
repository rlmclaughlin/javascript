import React, {useState} from 'react' 


function Form(props){

    const [todo, setTodo] = useState({item: ''})

    const changeHandler = (e) => {
        e.persist()
        setTodo((items) => ({
            ...items,
            item: e.target.value
        }))
        console.log(todo)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.setTodos((item) => ([
            ...item,
            todo.item
        ]))
    }

    console.log(props.todos)
    console.log(props.todos)

    return(
        <form onSubmit={submitHandler}> 
            <input name='todo' 
                   placeholder='todo here' 
                   value={todo.item} 
                   type='text' 
                   onChange={changeHandler}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form