var jwt = require('jsonwebtoken');
const authValdn = async (req, res, next) => {
    try {
        let tokenData = req.headers.token
        if (!tokenData) {
            return res.status(401).json({ data: null, message: "Unauthorized", code: 401, });
        }
        console.log("token data", tokenData);
        var decoded = jwt.verify(tokenData, "secrettkeyjwt");//decrypt token and return original data
        console.log(decoded.payload);
        console.log("decoded with _id" + JSON.stringify(decoded));
        if (decoded.payload == "jwt string") {
            next();
        }
    } catch (error) {
        return res.status(500).json({ data: null, message: "Unauthorized", code: 500, });
    }
}
module.exports = { authValdn }