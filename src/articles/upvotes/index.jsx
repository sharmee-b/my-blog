import React, { useState, useEffect } from "react";

const Upvotes = ({ name, upvotes, setArticleInfo }) => {
  const handleUpvote = async () => {
    const result = await fetch(`/api/articles/${name}/upvote`, {
      method: "post",
    });
    const body = await result.json();
    setArticleInfo(body);
  };

  return (
    <div id="upvotes">
      <p> This article has {upvotes} upvote(s)</p>
      <button onClick={() => handleUpvote()}>Upvote</button>
    </div>
  );
};

export default Upvotes;
