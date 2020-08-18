const mongoose = require('mongoose');

const { Schema } = mongoose; //This is equivelent of const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
