import { FaTrash, FaEdit } from "react-icons/fa"

export default function TodoItem(props){
    let { todo, keyVal, onDelete, onEdit } = props;
    return (
        <div className="todoItem" key={keyVal}>
            <FaTrash className="trashIcon" onClick={onDelete}  />
            <FaEdit className="editIcon" onClick={onEdit}/>
            <p className="txtTodoItem">{todo}</p>
        </div>
    )
}