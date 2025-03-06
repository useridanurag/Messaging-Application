import User from "../models/user.model.js"
import argon2 from "argon2";
import createTokenAndSaveCookie from "../jwt/createTokenAndSaveCookie.js";
const register = async (req, res) => {
    try {
        const { fullName, email, password, confirmPassword } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "User already registered" });
        }
        if (confirmPassword !== password) {
            return res.status(400).json({ error: "Password does not match." });
        }
        const hashPassword = await argon2.hash(password);
        const newUser = new User({
            fullName,
            email,
            password: hashPassword,
        });
        await newUser.save();
        if (newUser) {
            createTokenAndSaveCookie(newUser._id, res);
            res.status(200).json({
                message: "User registered successfully.",
                user: {
                    _id: newUser._id,
                    fullName: newUser.fullName,
                    email: newUser.email,
                },
            });
        };

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error !",
        })
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid credential." });
        }
        const isMatch = await argon2.verify(user.password, password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credential." });
        }
        if (user) {
            createTokenAndSaveCookie(user._id, res);
            res.status(200).json({
                message: "User logged in successfull.",
                user: {
                    _id: user._id,
                    fullName: user.fullName,
                    email: user.email,
                },
            });
        };

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error !",
        })
    }
};

const logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({ message: "User logout successfully." });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error !",
        })
    }
};

const allUser = async (req, res) => {
    try {

    } catch (error) {
        console.log("Error in allUsers controller. " + error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error !"
        })
    }
}



export default { register, login, logout, allUser };