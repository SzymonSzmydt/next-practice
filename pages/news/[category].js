function ArticleListByCategory({ articles, category }) {
  return (
    <div>
      <h1> Showing news from Category </h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title}
          </h2>
          <p> {article.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  const { category } = params;
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=northshape"]);

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  return {
    props: {
      articles: data,
      category,
    },
  };
}
