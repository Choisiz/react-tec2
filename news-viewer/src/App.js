import React, { useState } from "react";
import axios from "axios";
//axios로 api정보 불러오기
const App = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      setData(res.data);
    });
  };
  console.log("data", data);

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
