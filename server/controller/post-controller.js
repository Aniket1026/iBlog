import Post from '../model/post.js'

export const createPost = async(request,response) => {
    try {
        const post = await new Post(request.body)
        post.save()
        return response.status(200).json({msg:'post saved successfully'})
    } catch (error) {
        return response.status(500).json(error)
    }
}

export const getAllPosts =async (request,response) => {
    try {
        const allPosts = await Post.find({})
        return response.status(200).json(allPosts)
    } catch (error) {
        return response.status(500).json({ msg: 'error in fetching posts' + error.message })
    }
}