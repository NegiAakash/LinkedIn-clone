import mongoose, { DocumentDefinition } from 'mongoose';
import Post, { IPost } from '../models/post.model';
import User, { IUser } from "../models/user.model";

export async function createPost(email: String, desc: String) {

    try {
        const user_id = await User.findOne({ email: email }).select('_id');

        await Post.create({ user: user_id, description: desc });
        return ('Post created successfully.')
    } catch (err: any) {
        throw new Error(err.message);
    }
}

export async function getPosts(email: String) {
    try {
        const user_id = await User.findOne({ email: email }).select('_id');
        const posts = await Post.find({ user: user_id })
        return posts;

    } catch (err: any) {
        throw new Error(err.message);


    }
}

export async function getAllPosts() {
    try {
        var posts: any = [];
        (await Post.find({}).populate('user').then(post => {
            posts = post;
        })
        );
        return (posts);

    } catch (err: any) {
        throw new Error("err.message")
    }
}