import "./ToDoEdit.scss";
import { useCallback, useEffect, useRef, useState } from 'react';

function ToDoEdit({
    todo,
    onUpdate
}) {

    const [value, setValue] = useState("");

    const onChange = function(e){
        setValue((value) => e.target.value);
    }

    const onSubmit = function(e){
        onUpdate(todo.id, value);
        e.preventDefault();
    }

    useEffect(()=> {
        if(todo){
            setValue(todo.text);
        }
    }, [todo])
    return (
        <div className="background">
            <form onSubmit={onSubmit} className="todoedit__insert">
            <h2>수정하기</h2>
            <input
                onChange={onChange}
                value={value}
                placeholder="할 일을 입력하세요"
            />
            <button type="submit">수정하기</button>
            </form>
        </div>
    )
}

export default ToDoEdit;