
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String,
    },
    isverified: {
        require: true,
        type: String
    },
    usertype: {
        require: true,
        type: String
    }
}, { timestamp: true });

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;