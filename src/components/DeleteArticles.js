import axios from "axios";
import React from "react";

const DeleteArticles = ({ id }) => {
  const handleDelete = () => {
    console.log("SUPPRIMER");
    axios.delete("http://localhost:3003/articles/" + id);
    window.location.reload();
  };
  return (
    <button
      className="btn-delete"
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer cet article ?")) {
          handleDelete();
        }
      }}
    >
      Supprimer
    </button>
  );
};

export default DeleteArticles;
