import mongoose from "mongoose";

interface IComment extends mongoose.Document {
    created: Date;
    author: string;
    content: string;
    post: string;
}

const CommentSchema = new mongoose.Schema({
    created: {
        type: Date
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: [true, 'Must have a reference of a User.']
    },
    content: {
        type: String,
        required: [true, "Cannot post an empty comment."]
    },
    post: {
        type: String,
        required: [true, "Must have a reference of a post."]
    }
})


const Comment: mongoose.Model<IComment> = mongoose.model("Comment", CommentSchema);

export default Comment;