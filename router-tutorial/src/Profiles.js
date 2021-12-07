import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Profile from "./Profile";
export default function Profiles() {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <Link to="profile/cky">cky 프로필이시다.</Link>
        </li>
        <li>
          <Link to="profile/park">park 프로필이시다</Link>
        </li>
        <li>
          <Link to="profile/">ww</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/profile" element={<div>사용자 선택해주세요</div>} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}
