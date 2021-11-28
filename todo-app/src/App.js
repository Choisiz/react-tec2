import { useEffect, useState } from 'react';
import TodoInsert from './Component/TodoInsert';
import TodoList from './Component/TodoList';
import TodoTemplate from './Component/TodoTemplate';

const App =() => {
  const [item,setItem] =useState();
  useEffect((e)=> {
    
  })
  const cky=localStorage.getItem('TODO')
  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList todos={cky}/>
    </TodoTemplate>
  )
}

export default App;