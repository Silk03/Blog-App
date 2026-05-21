import express from 'express';
import {getAllPosts, createPost, updatePost} from '../controllers/blogController.js';

let router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);
router.put("/:id", updatePost);

export default router