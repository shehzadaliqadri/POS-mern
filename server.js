import express from "express";
import morgan from "morgan";
import cors from "cors"
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/config.js";

//dotenv config
dotenv.config();

// db config
connectDB();


const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


//routes
app.get("/", (req, res, next) => {
    res.send(`<h1>POS Backend</h1>`)
})

//port
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgCyan.black)
})