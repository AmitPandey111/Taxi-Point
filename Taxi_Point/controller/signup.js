
const jwt = require('jsonwebtoken')
async function signup() {
    try {
        let userToken = jwt.sign({ payload: "jwt string" }, "secrettkeyjwt");
        return userToken;
    } catch (error) {
        console.log(error);
    }
}
module.exports = { signup }