const express = require('express');
const router = express.Router();
const config = require('../../config');

router.post('/', async(req, res) => {
    const users = config.getDbCPR().collection("users");
    const jwt_token = require('crypto').randomBytes(64).toString('hex')

    const {
        username,
        password,
    } = req.body

    const data = await users.findOne({ username: username, password: password });

    const newUser = {
        $set: {
            username: data.username,
            password: data.password,
            jwt_token: jwt_token
        }
    }

    try {
        const result = await users.updateOne({ _id: data._id }, newUser);
        res.status(200).json({ data: data })
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

module.exports = router;