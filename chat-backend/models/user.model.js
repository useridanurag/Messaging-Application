import { Schema, model } from "mongoose";
const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        maxLength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const UserModel = model("User", UserSchema);

export default UserModel;