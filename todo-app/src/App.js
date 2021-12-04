import { useEffect, useState, useCallback, useRef } from "react";
import TodoInsert from "./Component/TodoInsert";
import TodoList from "./Component/TodoList";
import TodoTemplate from "./Component/TodoTemplate";
//sss
const App = () => {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(0);

  //삽입
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  //삭제
  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  //수정
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo
      )
    );
  }, []);

  useEffect(() => {
    const getList = localStorage.getItem("list");
    if (getList) {
      setTodos(JSON.parse(getList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
