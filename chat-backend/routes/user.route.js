import express from "express";
import userControllers from "../controllers/user.controller.js";
const { register, login, logout, allUser } = userControllers;

const router = express.Router();

router
    .post("/register", register)
    .post("/login", login)
    .post("/logout", logout)
    .get("/allUser", allUser);

export default router;

