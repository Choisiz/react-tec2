import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
function App() {
  const { username } = useParams();
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
            <Link to="/profile/cky">cky 프로필이시다.</Link>
          </li>
          <li>
            <Link to="profile/park">park 프로필이시다</Link>
          </li>
        </ul>
        <hr />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="hello" element={<Home />} />
        </Route>

        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/profile/" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
