import { comments } from "../../../data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  }

  if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }

  if (req.method === "PATCH") {
    const commentId = req.body.id;
    const text = req.body.text;
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    comments[index]["text"] = text;
    const modyfyComment = {
      id: commentId,
      text: text,
    };
    res.status(201).json(modyfyComment);
  }
}
