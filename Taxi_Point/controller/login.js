async function login(req, res) {
    try {
        res.status(200).json({ status: true, code: 200, data: "null", "message": "Private Api Success" });
    } catch (error) {
        console.log(error);
    }
}
module.exports = { login }