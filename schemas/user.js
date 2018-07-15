const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: String,
    password: String,
    name: String,
    lastName: String
})

mongoose.model('Users', UserSchema, 'users');
mongoose.connect('mongodb://localhost:27017/urder');