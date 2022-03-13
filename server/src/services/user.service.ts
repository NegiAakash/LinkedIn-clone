import { DocumentDefinition } from 'mongoose'
import User, { IUser } from '../models/user.model'

export async function createUser(user: DocumentDefinition<IUser>) {
    try {
        return await User.create(user);
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export async function getUser(email: String) {
    try {
        const user = await User.findOne({ email }).lean();
        if (!user) {
            throw new Error('User not found')
        }

        return { '_id': user?._id, 'email': user?.email, 'name': user.name, 'password': user?.password };
    } catch (error: any) {
        throw new Error(error.message);
    }
}


export async function getUserById(_id: string) {
    try {
        const user = await User.findById({ _id: _id }).select("email");
        // console.log(user);
        return user;
    } catch (err: any) {
        throw new Error(err.message);
    }
}