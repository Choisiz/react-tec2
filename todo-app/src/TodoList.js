import { useCallback, useRef, useState } from "react";
import AddForm from "./Component2/AddForm";
import TodoTemplate2 from "./Component2/TodoTemplate2";
//https://velog.io/@chez_bono/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0#-react-todolist-%EC%99%84%EC%84%B1%EB%B3%B8
const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(0);
  const isMount = useRef(true);

  const addTodo = useCallback(
    (todo) => (e) => {
      console.log("ww");
    },
    [id]
  );
  return (
    <TodoTemplate2>
      <AddForm addTodo={addTodo} />
    </TodoTemplate2>
  );
};

export default TodoList;
