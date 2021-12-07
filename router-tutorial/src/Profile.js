import React from "react";
import { useParams } from "react-router-dom";

const data = {
  cky: { name: "cky", des: "리액트개발자" },
  park: { name: "jspark", des: "축구선수" },
};

const Profile = ({ props }) => {
  const { username } = useParams();
  console.log("c", username);
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.des}</p>
    </div>
  );
};

export default Profile;
