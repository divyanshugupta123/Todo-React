import React from 'react'
import { BsTrash } from "react-icons/bs";


const Todo = (props) => {
    function deleteTodoHandler(id){
        props.deleteTodo(id);
    }

  return (
    <div>
        <li>
            <p>Index : {props.index}</p>
            <h5>Id : {props.id}</h5>
            <h4>Todo : {props.todo}</h4>
            <span onClick={()=>deleteTodoHandler(props.id)}><BsTrash/></span>
        </li>
    </div>
  )
}

export default Todo