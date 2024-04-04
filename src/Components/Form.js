import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'

const Form = (props) => {
    let [input,setInput] = useState('');
    function inputChangeHandler(e){
        setInput(e.target.value);
    }
    function formSumbitHandler(e){
        e.preventDefault();     //preventing from getting submitted
        const newTodo={
            id : uuid(),
            todo:input
        }
        props.addTodo(newTodo)
        console.log(input);
        // ab isse page reload ho rha hai or input sirf kuch milliseconds k liye aa rha hai to hum use krenge e.preventDefalut()
        setInput('');
    }
  return (
    <form onSubmit={formSumbitHandler}>
        <input onChange={inputChangeHandler} type='text' placeholder='Enter your task' value={input}/>
    </form>
  )
}

export default Form