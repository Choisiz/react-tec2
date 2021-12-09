import React, { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HistorySample = () => {
  const history = useNavigate();
  const handleGoBack = () => {
    if (window.confirm("뒤로가게?")) {
      history(-1);
    } else {
      return;
    }
  };
  const handleGoHone = () => {
    if (window.confirm("홈으로 갈건가요?")) {
      history("/");
    } else {
      return;
    }
  };

  return (
    <div>
      <button onClick={handleGoBack}>뒤로</button>
      <button onClick={handleGoHone}>홈으로</button>
    </div>
  );
};

export default HistorySample;
