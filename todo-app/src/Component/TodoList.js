import TodoListItem from './TodoListItem'
import '../TodoList.scss';
const TodoList = ({todos}) => {
    console.log('??wew',todos)
    return (
        <div className="TodoList">
                <TodoListItem todo={todos}/>
        </div>

    )
}

export default TodoList