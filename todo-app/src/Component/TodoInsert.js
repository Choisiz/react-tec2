import { useCallback, useState } from 'react';
import {MdAdd} from "react-icons/md";
import "../TodoInsert.scss"
//https://kirkim.github.io/javascript/2021/08/16/todo_list.html
const TodoInsert = () => {
    const [value,setValue] =useState();
    const [newObj, setNewObj] =useState({
        todo: value,
        checked: false
    })

    /*
    let toDos = [];
const toDoInput = document.querySelector("#A17-todo input");

function submitFunc(event)
    event.preventDefault();
    const newInput = toDoInput.value;
    const newObj = {
        text: newInput,
        id: Date.now(),
        is_done: false,
    }
    toDoInput.value = "";
    toDos.push(newObj);
    saveToDos();
    paintToDo(newObj);
}
function saveToDos() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}
/* saveToDos() */

    
    const onChange =(e)=>{
        setValue(e.target.value);
        console.log("vlaue",value)
    };

    const onSubmit =(e) => {
        e.preventDefault();
        setValue('');
        localStorage.setItem("TODO",JSON.stringify(value));
    }
      
    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할일을 입력하세요"
                name="todo"

                id="todo"
                onChange={onChange}
            />
            <button type="submit"><MdAdd/></button>
        </form>
    )
}

export default TodoInsert;