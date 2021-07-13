import axios from "axios";
import React, { useEffect, useState } from "react";
import Article from "../components/Article";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:3003/articles")
      .then((res) => setNewsData(res.data));
  };
  return (
    <div className="news-container">
      <Navigation></Navigation>
      <Logo></Logo>
      <h1>News</h1>
      <form action="">
        <input type="text" placeholder="Nom" />
        <textarea placeholder="Messsage"></textarea>
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {" "}
        {newsData.map((article) => (
          <Article key={article.id} article={article}></Article>
        ))}{" "}
      </ul>
    </div>
  );
};

export default News;
