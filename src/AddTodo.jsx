import React, { useState } from "react"
import TodoItem from "./TodoItem.jsx";


export default function AddTodo(){
    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState("");


    const handleChange = (e) => {
        setNewTodo(e.target.value);
    }

    const handleClick = () => {
        setTodo([...todo, newTodo]);
        setNewTodo("");
    }

    const handleDelete = (index) => {
        const updatedTodos = [...todo];
        updatedTodos.splice(index, 1);
        setTodo(updatedTodos);
    }
    return (
        <div className="addTodoContainer">
            <input className="inpTodo" type="text" onChange={handleChange} onKeyDown={(e) => (e.key === 'Enter') ? handleClick() : false} value={newTodo}></input>
            <button className="btnAddTodo" type="button" onClick={handleClick}>Add</button>
            <div className="todoItemContainer">
                { todo.map( (item, index) => {
                    return <TodoItem todo={item} keyVal={index} onDelete={() => handleDelete(index)} />
                }) 
                }
            </div>

        </div>
    )
}