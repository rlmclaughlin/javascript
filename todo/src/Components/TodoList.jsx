import React from 'react'
import Todo from './Todo.jsx'
import './styles/TodoList.css'


function TodoList(props){
    return(
        <div>
            {!props.todos.length ? <h2 className="please-enter-message">Please Enter A Todo...</h2> :
                <h1 className='todolist-header'>List of Todos</h1> 
            }
            {props.todos.map((item, index) => 
                <Todo isCompletedHandler={props.isCompletedHandler} 
                      todo={item.item}
                      key={index}
                      id={index} 
                      completed={item.isCompleted} 
                      todos={props.todos} 
                      deleteHandler={props.deleteHandler}/>  
            )}
            {!props.todos.length ? '' :
                <section id='delete-list-container'>
                    <div className="background">
                        <button onClick={props.deleteAll} className='delete-list-button'>DELETE LIST</button>
                    </div>
                </section>
            }
        </div>
    )
}

export default TodoList