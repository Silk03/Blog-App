import Post from '../models/Post.js';

export async function getAllPosts(_, res) {
    try {
        let posts = await Post.find().sort({createdAt: -1});
        res.status(200).json(posts);
    }catch (error) {
        res.status(500).json({message: "Server Error"});
    }
}