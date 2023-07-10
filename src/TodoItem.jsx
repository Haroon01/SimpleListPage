import { FaTrash } from "react-icons/fa"

export default function TodoItem(props){
    let { todo, keyVal, onDelete } = props;
    return (
        <div className="todoItem" key={keyVal}>
            <FaTrash className="trashIcon" onClick={onDelete}  />
            <p className="txtTodoItem">{todo}</p>
        </div>
    )
}