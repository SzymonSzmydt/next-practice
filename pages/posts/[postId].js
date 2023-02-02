function Post({ post }) {
  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p> {post.body}</p>
    </>
  );
}

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generate page for /posts/${params.postId}`);
  return {
    props: {
      post: data,
    },
  };
}
