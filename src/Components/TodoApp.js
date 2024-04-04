import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'
import {v4 as uuid} from 'uuid'

const TodoApp = () => {
    let dummy = [
        {
            id: uuid(),
            todo: "Do Gym"

        }, {
            id: uuid(),
            todo: "Wash Cloth"
        }, {
            id: uuid(),
            todo: "play chess"
        }, {
            id: uuid(),
            todo: "Code"
        }
    ]

    let[todos,setTodos]= useState(dummy);
    const addTodo=(todo)=>{
        setTodos([...todos , todo]);
    }

    const deleteTodo=(id)=>{
        const newTodo = todos.filter((todo)=>todo.id !== id);
        setTodos(newTodo);
    }

    

    return (
        <div>
            <h1 style={{'color' : 'red','textAlign':'center'}}>TODO list for Divyanshu Gupta</h1>
            <Form addTodo={addTodo} todos={todos}/>
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    )
}

export default TodoApp