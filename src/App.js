import logo from './logo.svg';
import './App.css';
import { useCallback, useRef, useState } from 'react';
import TodoTemplate from './component/ToDoTemplate';
import TodoList from './component/TodoList';
import ToDoEdit from './component/ToDoEdit';
import ToDoInsert from './component/ToDoInsert';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 하기',
      checked: true,
    },
    {
      id: 3,
      text: '투두리스트 만들기',
      checked: false,
    },
  ]);
  const [selectedTodo, setSelectedTodo] = useState(null); // 수정 버튼 클릭시 수정할 todo 정보
  const [editoggle, setEditToggle] = useState(false); // 수정 모달 활성화 여부

  const nextId = useRef(4);

  const onToggle = useCallback((id) => {
    setTodos(
      (todos) => 
        todos.map((todo) => (
        todo.id === id ? { ...todo, checked: !todo.checked} : todo
      )
    ));
  }, []);

  const onRemove = useCallback((id) => {
    setTodos(
      (todos) => 
      todos.filter((todo) => (
        todo.id !== id
      ))
    );
  }, []);

  const onEditToggle = useCallback((todo) => {
    setSelectedTodo(editoggle ? null : todo); // 활성화시 선택한 todo 입력 / 비활성화시 null 입력
    setEditToggle((editoggle)=>!editoggle) // toggle
  }, []);

  const onUpdate = useCallback((id, text) => {
    setTodos(
      (todos) => 
        todos.map((todo) => (
        todo.id === id ? { ...todo, text: text} : todo
      )
    ));
    onEditToggle();
  }, []);

  const onInsert = useCallback((text) => {
    if(text){
      setTodos(
        (todos) => 
        [...todos, {id: nextId.current, text: text, checked: false}]
      );
      nextId.current += 1;
    }
  }, []);

  return (
    <TodoTemplate>
      <ToDoInsert
      onInsert={onInsert}
       />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        onToggle={onToggle}
        onRemove={onRemove}
        onEditToggle={onEditToggle}
      ></TodoList>
      {editoggle && 
      <ToDoEdit 
        todo={selectedTodo}
        onUpdate={onUpdate} /> 
      }
    </TodoTemplate>
  );
}

export default App;
