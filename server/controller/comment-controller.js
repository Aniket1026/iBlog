import Comment from '../model/comment.js'

export const newComment = async (request, response) => {
    try {
        const comment = await new Comment(request.body);
        comment.save();
        return response.status(200).json({ msg: 'Comment added successfully' });
    } catch (error) {
        return response.status(500).json(error);
    }
}