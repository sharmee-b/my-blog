import React, { useState } from "react";

const Comments = ({ name, comments, setArticleInfo }) => {
  const [comment, setComment] = useState();
  const handleCommentPost = async () => {
    const result = await fetch(`/api/articles/${name}/add-comment`, {
      method: "post",
      body: JSON.stringify({ username: "s1b072c", text: comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setComment("");
  };
  return (
    <>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div>
          <h4>{comment.username}</h4>
          <p>{comment.text}</p>
        </div>
      ))}
      <textarea
        placeholder="Add a comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      ></textarea>
      <button onClick={() => handleCommentPost()}>Post</button>
    </>
  );
};

export default Comments;
