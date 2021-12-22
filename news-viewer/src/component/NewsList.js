import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and(max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewsList = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  //api
  const fetchData = async () => {
    setLoading(true); // 로딩중..
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=98276eb55fe94eeebfe387703b151d89"
      );
      setArticle(res.data.articles);
    } catch (e) {
      console.log(e);
    }
    setLoading(false); //로딩끝
  };

  if (loading) {
    //true면
    <NewsListBlock>대기중..</NewsListBlock>;
  }
  if (!article) {
    return null;
  }
  return (
    <NewsListBlock>
      {article.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
