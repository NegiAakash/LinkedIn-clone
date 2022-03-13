import { Request, Response } from "express";
import { createPost, getPosts, getAllPosts } from "../services/post.service";



exports.createPost = async function (req: Request, res: Response) {
    // console.log(req.body);

    try {
        await createPost(req.body.user.email, req.body.description);
        res.status(200).send("Post created");

    } catch (err: any) {
        return res.status(409).send(err.message);

    }
}

exports.getPostsByAuthor = async function (req: Request, res: Response) {
    try {
        let posts = await getPosts(req.body.user.email);

        res.status(200).send(posts);

    } catch (err: any) {
        return res.status(409).send(err.message);

    }
}


exports.getAllPosts = async function (req: Request, res: Response) {
    try {
        const posts = await getAllPosts();

        res.status(200).send(posts);

    } catch (err: any) {
        return res.status(409).send(err.message);
    }
}