import { comments } from "../../data/comments";

function Comment({ comment }) {
  return (
    <>
      <h1>
        {comment.id} {comment.text}
      </h1>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(contex) {
  const { params } = contex;
  const { commentId } = params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  console.log(comment);

  return {
    props: {
      comment,
    },
  };
}

export default Comment;
