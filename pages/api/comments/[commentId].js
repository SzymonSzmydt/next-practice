import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;
  const comment = comments.find((comment) => comment.id === +commentId);
  res.status(200).json(comment);
}
