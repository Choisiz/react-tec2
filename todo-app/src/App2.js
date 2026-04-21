import { useEffect, useReducer, useCallback, useRef, act } from "react";
import TodoInsert from "./Component/TodoInsert";
import TodoList from "./Component/TodoList";
import TodoTemplate from "./Component/TodoTemplate";

//더미데이터: 초기에만 로드
function createBulkTodos() {
  const arrray = [];
  for (let i = 1; i <= 2500; i++) {
    arrray.push({
      id: 1,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return arrray;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case "INIT":
      return action.todos;
    case "I":
      return todos.concat(action.todo);
    case "R":
      return todos.filter((todo) => todo.id !== action.id);
    case "T":
      return todos.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo,
      );
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const nextId = useRef(0);

  //삽입
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: "I", todo });
    nextId.current += 1;
  }, []);

  //삭제
  const onRemove = useCallback((id) => {
    dispatch({ type: "R", id });
  }, []);

  //수정
  const onToggle = useCallback((id) => {
    dispatch({ type: "T", id });
  }, []);

  useEffect(() => {
    const getList = localStorage.getItem("list");
    if (getList) {
      dispatch({ type: "INIT", todos: JSON.parse(getList) });
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
