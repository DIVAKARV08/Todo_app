import React,{useState,useEffect,useRef } from 'react';

function Todoform(props) {
    const [input, Setinput]=useState(props.edit ? props.edit.value : ''); //State variable input and callback function Setinput

    const inputfocus=useRef(null)
    useEffect(()=>{ inputfocus.current.focus()})
    const handleChange= e => {
        Setinput(e.target.value);
    }
    const handleSubmit= e =>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        });

        Setinput('');
    };
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (<> <input type="text" placeholder="Update your todo" value={input} name="text" className="todo-input edit" onChange={handleChange} ref={inputfocus}/>
            <button className="todo-button edit">Update Todo</button> </>) : (<> <input type="text" placeholder="Add a todo" value={input} name="text" className="todo-input" onChange={handleChange} ref={inputfocus}/>
            <button className="todo-button">Add Todo</button> </>) }
             
        </form>
    )
}

export default Todoform;
