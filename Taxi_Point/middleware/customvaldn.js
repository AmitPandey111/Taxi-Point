const customValdn = async (req, res, next) => {
    try {
        const authCredentials = {
            auth_key: "Tpdevrewamp@auth",
            client_service: "Tpdevrewamp@client"
        }
        const customAuth = req.headers.auth_key;
        const customClient = req.headers.client_service;
        if (authCredentials.auth_key == customAuth && authCredentials.client_service == customClient) {
            next();
        }
        else {
            return res.status(401).json({ data: null, message: "Unauthorized", code: 401 })
        }
    } catch (error) {
        return res.status(500).json({ data: null, message: "Custom middleware error", code: 500 });
    }
}
module.exports = { customValdn }