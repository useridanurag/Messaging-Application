import jwt from "jsonwebtoken";
import User from "../models/user.model.js"
const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(400).json({ error: "No Token, authorization denied." });
        }
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        if (!decoded) {
            return res.status(400).json({ error: "Invalid token" });
        }
        const getUser = await User.findById(decoded.userId).select("-password");
        if (!getUser) {
            return res.status(400).json({ error: "No user found." })
        }
        if (getUser) {
            req.user = getUser;
            next();
        }
    } catch (error) {
        console.log("Error in IsLoggedIn middleware " + error);
        res.status(500).json({
            success: false,
            error: "Internal server error .",
        })
    }
}

export default isLoggedIn;