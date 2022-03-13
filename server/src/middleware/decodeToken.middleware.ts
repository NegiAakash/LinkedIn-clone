import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
require('dotenv').config();

export const decodeToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']

    const token = authHeader
    // console.log(authHeader, token)
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
        // console.log(err)

        if (err) return res.sendStatus(403)

        req.body.user = user

        next()
    })
    // const decode = jwt.verify(token, <string>);

}