import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const News = () => {
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
      <ul></ul>
    </div>
  );
};

export default News;
