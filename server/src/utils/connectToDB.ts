import mongoose from "mongoose";
// import morgan from "morgan";


// const uri: string = <string>process.env.MONGO_URI;

export default (uri: string) => {

    const connect = () => {
        mongoose.connect(uri).then(() => {
            console.log('Successfully connected to db ')
        }).catch(err => {
            console.error('Error while connecting to db ', err)
        })
    }

    connect();

    // mongoose.connection.on('disconnected', connect);
}