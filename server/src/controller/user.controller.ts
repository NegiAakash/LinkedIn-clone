import { NextFunction, Request, Response } from "express";
import { createUser, getUser, getUserById } from '../services/user.service';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
require('dotenv').config();


exports.createUserHandler = async function (req: Request, res: Response, next: NextFunction) {
    try {
        await createUser(req.body);
        res.status(200).send("User created");
    } catch (err: any) {
        return res.status(409).send(err.message);
    }
}


export const getUserHandler = async (req: Request, res: Response) => {
    try {
        let user = await getUser(req.body.email);
        const pass = await bcrypt.compare(req.body.password, user.password)
        if (pass) {
            const token = jwt.sign({ id: user._id, email: user.email }, <string>process.env.JWT_SECRET);
            res.status(200).send({ 'token': token })
        }
        else {
            throw new Error("Incorrect username or password.")
        }
    } catch (err: any) {
        console.error(err.message);
        res.status(409).send(err);
    }
}

export const userById = async (req: Request, res: Response) => {
    try {
        let user = await getUserById(req.params.id);
        // console.log(user);
        res.status(200).send(user);

    } catch (err: any) {
        console.error(err.message);

        res.status(409).send(err);
    }
}