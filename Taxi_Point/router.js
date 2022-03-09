const express = require('express');
const { login } = require('./controller/login')
const { signup } = require('./controller/signup')
const { customValdn, customAndTokenValdn} = require('./middleware/customAndTokenValdn')
var router = express.Router();
router.post('/publicapi', customValdn, async (req, res) => {
    console.log("Hi");
    const token = await signup()
    res.status(200).json({ status: true, code: 200, data: { token: token }, "message": "Public Api Success" });
})
router.post('/privateapi',customAndTokenValdn, async (req, res) => {
    await login(req, res);
})
module.exports = { router }