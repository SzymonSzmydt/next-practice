import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch(`/api/comments`);
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    fetchComments();
  };

  const modyfyComment = async (commentId, commentText) => {
    const text = prompt("Zmień komentarz", commentText);
    if (text !== null) {
      const response = await fetch(`/api/comments/`, {
        method: "PATCH",
        body: JSON.stringify({ id: commentId, text: text }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchComments();
    }
  };
  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}> Submit comment </button>
      <button onClick={fetchComments}> Load comments </button>
      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.id} {comment.text}
          <button onClick={() => deleteComment(comment.id)}> Delete </button>
          <button onClick={() => modyfyComment(comment.id, comment.text)}>
            Modyfy
          </button>
        </div>
      ))}
    </>
  );
}

export default CommentsPage;
