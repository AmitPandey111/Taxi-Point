//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
//var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true}
});

//Export function to create "SomeModel" model class
const User = mongoose.model('User', UserSchema );
module.exports={User}
