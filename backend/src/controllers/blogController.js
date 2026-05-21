import Post from '../models/Post.js';

export async function getAllPosts(_, res) {
    try {
        let posts = await Post.find().sort({createdAt: -1});
        res.status(200).json(posts);
    }catch (error) {
        res.status(500).json({message: "Server Error"});
    }
}

export async function createPost(req, res) {
    try{
        let {title, content} = req.body;
        let newPost = new Post({title, content});
        let savedPost = await newPost.save();
        res.status(201).json(savedPost);

    }catch (error) {
        res.status(500).json({message: "Server Error"});
    }
}

export async function updatePost(req, res) {
    try{
       
        let {title, content} = req.body;
        let updatedPost = await Post.findByIdAndUpdate(req.params.id, {title, content}, {new: true});
        if(!updatedPost) return res.status(404).json({message: "Post not found"});
        res.status(200).json(updatedPost);
    }catch (error) {
        res.status(500).json({message: "Server Error"});
    }
}

export async function deletePost(req, res) {
    try{
        let {title, content} = req.body;
        let deletedPost = await Post.findByIdAndDelete(req.params.id, {title, content}, {new: true});
        if(!deletedPost) return res.status(404).json({message: "Post not found"});
        res.status(200).json({message: "Post deleted successfully"});
    }catch (error) {
        res.status(500).json({message: "Server Error"});
    }

}