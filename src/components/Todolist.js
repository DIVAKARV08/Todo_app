import React,{useState} from 'react';
import Todo from './Todo';
import Todoform from './Todoform';

function Todolist() {
    const [todos,setTodos]=useState([]);

    const Addtodo= todo =>{  // to add a todo to the list 
        if(!todo.text){
        return
        }
        const newtodos=[todo,...todos];

        setTodos(newtodos);  //call back function to set todos state
    }


    const updatetodo=(todoid,newvalue) => {
        if(!newvalue.text){
            return
            }
        setTodos(prev=>prev.map(item => (item.id===todoid ? newvalue : item)))
    }

    const removetodo=id=>{
        const removeArr=[... todos].filter(todo=>todo.id !== id);

        setTodos(removeArr);
    }
    

    const completetodo=id=>{
        let updatedtodos=todos.map(todo=>{
            if(todo.id==id){
                todo.iscomplete=!todo.iscomplete;
            }
            return todo; 
        })
        setTodos(updatedtodos);
    }
    return (
        <div>
            <h1>Todo App</h1>
            <Todoform onSubmit={Addtodo} />
            <Todo todos={todos} completetodo={completetodo} removetodo={removetodo} updatetodo={updatetodo} />
        </div>
    )
}

export default Todolist;
