import TodoInsert from './Component/TodoInsert';
import TodoList from './Component/TodoList';
import TodoTemplate from './Component/TodoTemplate';

const App =() => {
  return <TodoTemplate><TodoInsert/><TodoList/></TodoTemplate>
}

export default App;