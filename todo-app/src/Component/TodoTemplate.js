import "../TodoTemplate.scss";
const TodoTemplate = ({ children }) => {
  const onClick = () => {
    import("../notify").then((result) => result.default());
  };
  return (
    <div className="TodoTemplate">
      <p onClick={onClick}>hello click</p>
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
