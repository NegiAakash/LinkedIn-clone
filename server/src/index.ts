import express, { Application } from 'express';

import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import connect from './utils/connectToDB'
import userRouter from './routes/user.routes';
import postRouter from './routes/post.routes';

require('dotenv').config();

const uri = <string>process.env.MONGO_URI;

const app: express.Application = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);

app.use(morgan('dev'));

connect(uri);

app.listen(port, () => {
    console.log(
        `Listening on ${port}`
    );

})