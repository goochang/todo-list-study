import { useState } from "react";
import "./ToDoInsert.scss";
import { MdAdd } from "react-icons/md";

function ToDoInsert({
    onInsert    
}) {
    const [value, setValue] = useState("");
    const onChange = function(e) {
        setValue(e.target.value);
    }

    const insert = function(){
        onInsert(value);
        setValue("");
    }
    return (
        <div className="TodoInsert" >
            <input
                onChange={onChange}
                value={value}
                placeholder="할 일을 입력하세요"
            />
            <button onClick={() => insert() }>
                <MdAdd />
            </button>
        </div>
    )
}

export default ToDoInsert;