import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: String
});

const Usermodel = model("user", UserSchema);
export { Usermodel };