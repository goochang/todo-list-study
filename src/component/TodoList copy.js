import ToDoListItem from "./ToDoListItem";
import "./TodoList.scss";

function TodoList({
    todos,
    onToggle,
    onRemove,
    onEditToggle
}) {
    return (
        <div className="TodoList">
            {
                todos.map((todo) => (
                    <ToDoListItem 
                        todo={todo}
                        onToggle={onToggle}
                        onRemove={onRemove}
                        onEditToggle={onEditToggle}
                    >
                    </ToDoListItem>
                ))
            }
        </div>
    )
}

export default TodoList;