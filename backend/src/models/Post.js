import mongoose from "mongoose";

// Define the schema for a Post
let postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    content: {
        type: String,
        required: true 
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
})

let Post = mongoose.model("Post", postSchema);

export default Post;