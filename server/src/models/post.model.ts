import mongoose from "mongoose";


export interface IPost extends mongoose.Document {
    created: Date;
    description: string;
    image: string[];
    user: string;
    comment: string[];
}

const postSchema = new mongoose.Schema({
    created: {
        type: Date
    },
    description: {
        type: String,
        required: [true, "Cannot post an empty Post."]
    },
    image: [{
        type: String
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Must have a reference of a User.']
    },
    comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments',
    }]
}, { timestamps: true })


const Post: mongoose.Model<IPost> = mongoose.model('Post', postSchema);
export default Post;