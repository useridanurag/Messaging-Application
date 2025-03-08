import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import cookieParser from "cookie-parser";
app.use(cookieParser());

import connectDB from "./config/db.js";
import user from "./routes/user.route.js";

import cors from "cors";
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}
));

app.use(express.json());

app.use("/user", user);// Mounting user route
connectDB();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`);
})