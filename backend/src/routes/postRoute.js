import express from 'express';
import {getAllPosts, createPost, updatePost, deletePost, getPostById } from '../controllers/blogController.js';

let router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router