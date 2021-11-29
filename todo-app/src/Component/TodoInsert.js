import { useCallback, useState, useRef } from "react";
import { MdAdd } from "react-icons/md";
import "../TodoInsert.scss";

const TodoInsert = (props) => {
  //const getList = localStorage.getItem("list");
  //const localGetList = JSON.parse(getList);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.onInsert(value);
    setValue("");
  };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
