import mongoose from "mongoose";
import colors from 'colors';

//  connect to mongodb

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
    } catch (error) {
        console.log(`Error : ${error}`.bgRed);
        process.exit(1)
    }
}

export default connectDB;