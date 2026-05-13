const Post = require("../models/post");
module.exports = function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    tags: ["fake", "data"],
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  }));
  Post.insertMany(posts, (err, docs) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${docs.length}개의 포스트를 생성했습니다.`);
  });
};
