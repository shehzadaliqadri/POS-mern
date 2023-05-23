import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/config.js';
import { itemModel } from './models/itemModel.js';
import { items } from './utils/data.js';

dotenv.config();
connectDB();
console.log(items)

//function seeder
const importData = async () => {
    try {
        // await itemModel.deleteMany();
        const ItemData = await itemModel.insertMany(items);
        console.log(`All items are added successfully`)
        console.log(`${ItemData}`)
        process.exit();
    } catch (error) {
        console.log(`${error}`.bgRed.inverse);
        process.exit(1);
    }
}

importData();