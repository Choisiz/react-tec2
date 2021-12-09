import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import History from "./HistorySample";
function App() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/profiles">프로필</Link>
          </li>
          <li>
            <Link to="/history">history 예제</Link>
          </li>
        </ul>
        <hr />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="hello" element={<Home />} />
        </Route>
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
