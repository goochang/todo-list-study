import "./ToDoListItem.scss";
import {
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
    MdCheckBox,
    MdModeEditOutline,
  } from 'react-icons/md';
import cn from 'classnames';

function ToDoListItem({
    todo,
    onToggle,
    onRemove,
    onEditToggle
}) {
    const { id, text, checked } = todo;
    return (
        <div className="TodoListItem-virtualized" >
            <li className="TodoListItem">
                <div className={cn('checkbox', { checked: checked})} 
                onClick={() => onToggle(id) }>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className="text">{text}</div>
                </div>
                <div className="edit"
                onClick={() => onEditToggle(todo) }>
                    <MdModeEditOutline />
                </div>
                <div className="remove"
                onClick={() => onRemove(id) }>
                    <MdRemoveCircleOutline />
                </div>
            </li>
        </div>
    )
}

export default ToDoListItem;