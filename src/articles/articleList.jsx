import React, { useEffect, useState } from "react";
import articles from "./articles";
import Upvote from "./upvotes";
import Comments from "./comments";

function ArticleList({ match }) {
  const { name } = match.params;
  console.log("name", name);
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log("body", body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  const content = articles.find((a) => a.name === name)?.content;
  if (!content) return <div id="article">Article does not exist</div>;
  return (
    <div id="articleList">
      {content}
      <div>
        <Upvote
          name={name}
          upvotes={articleInfo.upvotes}
          setArticleInfo={setArticleInfo}
        />
        <Comments
          name={name}
          comments={articleInfo.comments}
          setArticleInfo={setArticleInfo}
        />
      </div>
    </div>
  );
}

export default ArticleList;
