import TodoListItem from "./TodoListItem";
import "../TodoList.scss";
const TodoList = ({ localGetList }) => {
  console.log("누구", localGetList);
  return (
    <div className="TodoList">
      {Array.isArray(localGetList)
        ? localGetList.map((todo) => <TodoListItem todo={todo} key={todo.id} />)
        : ""}
    </div>
  );
};

export default TodoList;
