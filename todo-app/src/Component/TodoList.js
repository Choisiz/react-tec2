import TodoListItem from "./TodoListItem";
import "../TodoList.scss";
const TodoList = ({ todos }) => {
  console.log("listtodo", todos);
  return (
    <div className="TodoList">
      {Array.isArray(todos)
        ? todos.map((todo) => <TodoListItem todo={todo} key={todo.id} />)
        : ""}
    </div>
  );
};

export default TodoList;
