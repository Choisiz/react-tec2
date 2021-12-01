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
      localStorage.setItem("list", JSON.stringify(todos));
      nextId.current += 1;
    },
    [todos]
  );

  useEffect(() => {
    const getList = localStorage.getItem("list");
    if (getList) {
      setTodos(JSON.parse(getList));
    }
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
