const express = require('express');
const router = express.Router();
const config = require('../../config');

router.post('/', async(req, res) => {
    const users = config.getDbCPR().collection("users");
    const jwt_token = require('crypto').randomBytes(64).toString('hex')

    const {
        full_name,
        username,
        password,
    } = req.body

    const data = await users.find({}).toArray();
    const findData = await users.findOne({ username: username });
    const _id = data.length + 1;

    const newUser = {
        _id: _id,
        full_name: full_name,
        username: username,
        password: password,
        jwt_token: jwt_token
    }

    if (!findData) {
        const result = await users.insertOne(newUser);
        res.status(200).json({ result: result, data: newUser })
    } else if (findData) {
        res.status(400).json({ message: "Data sudah ada"})
    } else {
        res.status(400).json({ message: "error" })
    }
})

module.exports = router;