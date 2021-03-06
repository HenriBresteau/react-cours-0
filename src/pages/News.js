import axios from "axios";
import React, { useEffect, useState } from "react";
import Article from "../components/Article";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [author, setauthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:3003/articles")
      .then((res) => setNewsData(res.data));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    if (content.length < 140) {
      setError(true);
    } else {
      axios
        .post("http://localhost:3003/articles", {
          author,
          content,
          date: Date.now(),
        })
        .then(() => {
          setError(false);
          setauthor("");
          setContent("");
          getData();
        });
    }
  };
  return (
    <div className="news-container">
      <Navigation></Navigation>
      <Logo></Logo>
      <h1>News</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setauthor(e.target.value)}
          type="text"
          placeholder="Nom"
          value={author}
        />
        <textarea
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Messsage"
          value={content}
        ></textarea>
        {error && <p>Veuillez écricre un minimum de 140 caratères</p>}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {newsData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Article key={article.id} article={article}></Article>
          ))}
      </ul>
    </div>
  );
};

export default News;
