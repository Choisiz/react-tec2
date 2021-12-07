import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
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
        </ul>
        <hr />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="hello" element={<Home />} />
        </Route>

        <Route path="/profiles/*" element={<Profiles />} />
      </Routes>
    </div>
  );
}

export default App;
