import express from "express";
import { decodeToken } from "../middleware/decodeToken.middleware";
const PostController = require('../controller/post.controller')

const router = express.Router();

router.post('/', decodeToken, PostController.createPost);
router.get('/', decodeToken, PostController.getPostsByAuthor);
router.get('/all', decodeToken, PostController.getAllPosts)


export default router;