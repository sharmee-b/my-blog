import React, { useState } from "react";
import articles from "./articles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArticleList from "./articleList";

function Article() {
  return (
    <div id="article">
      Choose an article:
      <ol>
        {articles.map((a, i) => (
          <li key={i}>
            <Link to={`/articles/${a.name}`}>{a.name}</Link>
          </li>
        ))}
      </ol>
      <Route path="/articles/:name" component={ArticleList} />
    </div>
  );
}

export default Article;
