const mongoose = require('mongoose');

let user = [];
let Users = mongoose.model('Users');

user.saveUser = (req, res) => {
    new Users(req.body).save((err, data) => {
        console.log(err);
    });
    res.end();
}

user.getUserForm = (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/public/index.html');
}

module.exports = user;
