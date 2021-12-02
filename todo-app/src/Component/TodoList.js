import { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import "../TodoList.scss";
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {Array.isArray(todos)
        ? todos.map((todo) => (
            <TodoListItem
              todo={todo}
              key={todo.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))
        : ""}
    </div>
  );
};

export default TodoList;
