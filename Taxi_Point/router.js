const express = require('express');
const { login } = require('./controller/login')
const { signup } = require('./controller/signup')
const { customValdn} = require('./middleware/customvaldn')
const {authValdn } = require('./middleware/authValdn')
var router = express.Router();
router.post('/publicapi', customValdn, async (req, res) => {
    const token = await signup()
    res.status(200).json({ status: true, code: 200, data: { token: token }, "message": "Public Api Success" });
})
router.post('/privateapi',customValdn,authValdn, async (req, res) => {
    await login(req, res);
})
module.exports = { router }