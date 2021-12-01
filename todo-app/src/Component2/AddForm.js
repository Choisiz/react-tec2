import { memo, useEffect, useRef, useState } from "react";
import { MdAdd } from "react-icons/md";
import "../TodoInsert.scss";

const AddForm = memo(({ addTodo }) => {
  console.log("add", addTodo);
  const [value, setValue] = useState("");
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
    console.log("시작");
    setValue("");
  }, [addTodo]);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    console.log("ww");
  };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        ref={input}
        placeholder="할일을 입력하세요"
        value={value}
        onChange={onChangeInput}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
});
export default AddForm;
