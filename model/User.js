import mongoose from "mongoose";

const User = mongoose.Schema({
    firstName : String,
    lastName : String,
    email: String, 
    phone : String,
})

export default mongoose.model('User', User)