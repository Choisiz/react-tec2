import { useEffect, useState, useCallback, useRef } from "react";
import TodoInsert from "./Component/TodoInsert";
import TodoList from "./Component/TodoList";
import TodoTemplate from "./Component/TodoTemplate";

const App = () => {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);
  const onInsert = useCallback(
    (text) => {
      //text == value
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));

      nextId.current += 1;
      localStorage.setItem("list", JSON.stringify(todos));
    },
    [todos]
  );
  const getList = localStorage.getItem("list");
  const localGetList = JSON.parse(getList);
  console.log("re", localGetList);
  console.log("so", todos);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      {localGetList ? <TodoList localGetList={localGetList} /> : ""}
    </TodoTemplate>
  );
};

export default App;
