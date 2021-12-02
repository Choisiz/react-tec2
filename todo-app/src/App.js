import { useEffect, useState, useCallback, useRef } from "react";
import TodoInsert from "./Component/TodoInsert";
import TodoList from "./Component/TodoList";
import TodoTemplate from "./Component/TodoTemplate";

const App = () => {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(0);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

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
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
};

export default App;
