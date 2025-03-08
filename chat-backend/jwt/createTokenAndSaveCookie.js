import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
    const secret = process.env.JWT_TOKEN;
    const token = jwt.sign({ userId }, secret,);
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
    });
};

export default createTokenAndSaveCookie;