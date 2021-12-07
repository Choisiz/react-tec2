import React from "react";
import qs from "qs";
import { useNavigate, useLocation } from "react-router";

const About = ({ props }) => {
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 실습 예제</p>
      {showDetail && <p>detail의 값을 true로 설정</p>}
    </div>
  );
};

export default About;
