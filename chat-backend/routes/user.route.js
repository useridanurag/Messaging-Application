import express from "express";
import isLoggedIn from "../middlewares/isLoggedIn.js"
import userControllers from "../controllers/user.controller.js";
const { register, login, logout, allUser } = userControllers;

const router = express.Router();

router
    .post("/register", register)
    .post("/login", login)
    .post("/logout", logout)
    .get("/allUser",isLoggedIn, allUser);

export default router;

