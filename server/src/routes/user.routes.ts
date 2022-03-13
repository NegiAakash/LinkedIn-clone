import express from 'express'
import { decodeToken } from '../middleware/decodeToken.middleware';
import { getUserHandler, userById } from '../controller/user.controller';
import validRequest from '../middleware/validRequest';
import { createUserSchema } from '../models/user.model';
const UserController = require('../controller/user.controller')
const router = express.Router();

router.get('/healthcheck', (_, res: express.Response) => {
    res.sendStatus(200).send("All OK");
})


router.post('/', validRequest(createUserSchema), UserController.createUserHandler);

router.post('/login', getUserHandler);

router.get('/:id', decodeToken, userById);


export default router;