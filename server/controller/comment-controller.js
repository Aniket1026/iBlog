import Comment from "../model/comment.js";

export const newComment = async (request, response) => {
  try {
    const comment = await new Comment(request.body);
    comment.save();
    return response.status(200).json({ msg: "Comment added successfully" });
  } catch (error) {
    return response.status(500).json(error);
  }
};

export const getComment = async (request, response) => {
  try {
    let comments = await Comment.find({ postId: request.params.id });
    return response.status(200).json(comments);
  } catch (error) {
    return response.status(500).json({ error: "cannot get comments" });
  }
};

export const removeComment = async (request, response) => {
  try {
      let comment = await Comment.findById(request.params.id);
       if (!comment) {
         return response
           .status(404)
           .json({ msg: "Post not found" + error.message });
       }
       await Comment.findByIdAndDelete(comment._id);
    return response.status(200).json({ msg: "Comment Deleted Successfully" });
  } catch (error) {
    return response.status(500).json({ error: "cannot delete comments" });
  }
};
