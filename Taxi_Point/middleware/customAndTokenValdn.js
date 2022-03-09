var jwt = require('jsonwebtoken');
const customValdn = async (req, res, next) => {
    try {
        const customAuth = req.headers.auth_key;
        console.log(customAuth);
        if (!customAuth) {
            res.status(400).json({ status: false, message: "custom header auth key not provided" })
        }
        if (customAuth != "Tpdevrewamp@auth") {
            res.status(400).json({ status: false, message: "custom header auth key are invalid" })
        }
        const customClient = req.headers.client_service;
        if (!customClient) {
            res.status(400).json({ status: false, message: "custom header client-service key not provided" })
        }
        if (customClient != "Tpdevrewamp@client") {
            res.status(400).json({ status: false, message: "custom header client-service key are invalid" })
        }
        next()
    }
    catch (error) {
        console.log(error);
    }
}

const customAndTokenValdn = async (req, res, next) => {
    try {
        const customAuth = req.headers.auth_key;
        console.log(customAuth);
        if (!customAuth) {
            res.status(400).json({ status: false, message: "custom header auth key not provided" })
        }
        if (customAuth != "Tpdevrewamp@auth") {
            res.status(400).json({ status: false, message: "custom header auth key are invalid" })
        }
        const customClient = req.headers.client_service;
        if (!customClient) {
            res.status(400).json({ status: false, message: "custom header client-service key not provided" })
        }
        if (customClient != "Tpdevrewamp@client") {
            res.status(400).json({ status: false, message: "custom header client-service key are invalid" })
        }
        let tokenData = req.headers.token
        if (!tokenData) {
            res.send("token not provided")
        }
        console.log("token data", tokenData);
        var decoded = jwt.verify(tokenData, "secrettkeyjwt");//decrypt token and return original data
        console.log(decoded.payload);
        console.log("decoded with _id" + JSON.stringify(decoded));
        if (decoded.payload == "jwt string") {
            next();
        }

    } catch (error) {
        console.log(error);
    }
}
module.exports = { customValdn, customAndTokenValdn }