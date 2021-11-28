import { values } from 'lodash';
import React, {useState} from 'react';
import Todoform from './Todoform';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({todos,Completetodo,removetodo,updatetodo}) {
    const [edit,setedit]=useState(
        {
            id:null,
            value:""
        }
    );

    const submittodo=value=>{
        updatetodo(edit.id,value)
        setedit({
            id:null,
            value:''
        })
    }

    if(edit.id){
        return <Todoform edit={edit} onSubmit={submittodo} />
    }


    return todos.map((todo,index) =>(

        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>

            <div key={todo.id} onClick={()=>Completetodo(todo.id)}>
                {todo.text}
            </div>

            <div className="icons">
                <RiCloseCircleLine onClick={()=>removetodo(todo.id)} className='delete-icon'/>
                <TiEdit onClick={()=>setedit({id:todo.id,value:todo.text})} className='edit-icon'/>
           
            </div> 

        </div>
    ))
}

export default Todo;
