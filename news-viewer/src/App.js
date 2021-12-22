import React, { useCallback, useState } from "react";
import axios from "axios";
import NewsList from "./component/NewsList";
import Categories from "./component/Categories";
//axios로 api정보 불러오기
//98276eb55fe94eeebfe387703b151d89
const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
