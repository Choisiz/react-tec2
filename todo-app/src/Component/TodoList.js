import React, { useEffect, useCallback } from "react";
import TodoListItem from "./TodoListItem";
import { List } from "react-virtualized";
import "../TodoList.scss";
const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos]
  );
  return (
    <List
      className="TodoList"
      width={512} //전체크기
      height={513} //전체높이
      rowCount={todos.length} //항목갯수
      rowHeight={56} //항목높이
      rowRenderer={rowRenderer} //항목 랜더링 함수
      list={todos} //배열
      style={{ outline: "none" }} //list에 적용되는 기본 outline제거
    />
  );
};

export default React.memo(TodoList);
