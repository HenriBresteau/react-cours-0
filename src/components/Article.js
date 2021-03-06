import axios from "axios";
import React from "react";
import { useState } from "react";
import DeleteArticles from "./DeleteArticles";

const Article = ({ article }) => {
  const [isEditing, setisEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };
  const handleEdit = () => {
    const data = {
      author: article.author,
      content: editedContent ? editedContent : article.content,
      date: article.date,
    };
    axios.put("http://localhost:3003/articles/" + article.id, data).then(() => {
      setisEditing(false);
    });
  };
  return (
    <div
      className="article"
      style={{ background: isEditing ? "#61dafbb5" : "white" }}
    >
      <div className="card-header">
        <h3> {article.author} </h3>
        <em>Posté le {dateParser(article.date)} </em>
      </div>
      {isEditing ? (
        <textarea
          onChange={(e) => setEditedContent(e.target.value)}
          autofocus
          defaultValue={editedContent ? editedContent : article.content}
        ></textarea>
      ) : (
        <p> {editedContent ? editedContent : article.content} </p>
      )}
      <div className="btn-container">
        {isEditing ? (
          <button onClick={handleEdit} className="btn-validate">
            Valider
          </button>
        ) : (
          <button onClick={() => setisEditing(true)} className="btn-edit">
            Edit
          </button>
        )}
        <DeleteArticles id={article.id}></DeleteArticles>
      </div>
    </div>
  );
};

export default Article;
