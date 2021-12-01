import TodoListItem from "./TodoListItem";
import "../TodoList.scss";
const TodoList2 = ({ todos }) => {
  return (
    <div className="TodoList">
      {Array.isArray(todos)
        ? todos.map((todo) => <TodoListItem todo={todo} key={todo.id} />)
        : ""}
    </div>
  );
};

export default TodoList2;
