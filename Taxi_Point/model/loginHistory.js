//Require Mongoose
const { boolean } = require('joi');
var mongoose = require('mongoose');

//Define a schema
//var Schema = mongoose.Schema;

var loginSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, required: true },
    islogin: { type: Boolean, required: true },
    token: { type: String, required: true }
});

//Export function to create "SomeModel" model class
const login_history = mongoose.model('login_history', loginSchema);
module.exports = { login_history }
