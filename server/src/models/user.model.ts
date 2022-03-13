
import { object, string } from "yup";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';

export interface IUser extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    phone_number: number;
    enabled: boolean;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: mongoose.Schema = new mongoose.Schema<IUser>({
    name: { type: String },
    email: { type: String, required: true, unique: true, dropDups: true },
    password: { type: String, required: true },
    phone_number: { type: Number, default: 91000000 },
    enabled: { type: Boolean, default: true },
    // role: { type: mongoose.Schema.Types.ObjectId, ref: 'role' }
},
    { timestamps: true })

UserSchema.pre<IUser>('save', function (next) {
    if (this.isModified("password")) {
        this.password = bcrypt.hashSync(this.password, 12);
    }
    return next();
})




export const createUserSchema = object({
    body: object({
        // name: string().required("Name is required"),
        password: string()
            .required("Password is required")
            .min(6, "Password is too short - should be 6 chars minimum.")
            .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters."),

        email: string()
            .email("Must be a valid email")
            .required("Email is required"),

    }),
});


const User: mongoose.Model<IUser> = mongoose.model('User', UserSchema);

export default User;