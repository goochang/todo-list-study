import ToDoListItem from "./ToDoListItem";
import "./TodoList.scss";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function TodoList({
    todos,
    setTodos,
    onToggle,
    onRemove,
    onEditToggle
}) {

    const handleDragEnd = (result) => {
        if (!result.destination) return;
    
        const newTasks = [...todos];
        const [reorderedTask] = newTasks.splice(result.source.index, 1);
        newTasks.splice(result.destination.index, 0, reorderedTask);
    
        setTodos(newTasks);
      };
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="tasks">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="TodoList">
                        {todos.map((todo, index) => (
                            <Draggable key={todo.id} draggableId={`${todo.id}`} index={index}>
                                {(provided) => (
                                    <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <ToDoListItem
                                        todo={todo}
                                        onToggle={onToggle}
                                        onRemove={onRemove}
                                        onEditToggle={onEditToggle} />
                                </div>
                                )}
                                
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default TodoList;