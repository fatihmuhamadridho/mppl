const express = require('express');
const router = express.Router();
const config = require('../../config');

router.get('/', async(req, res) => {
    const cars = config.getDbCPR().collection("cars");
    try {
        const data = await cars.find({}).toArray();
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

router.post('/', async(req,res) => {
    const cars = config.getDbCPR().collection("cars");

    const {
        brand_name,
        type_car,
        created_year,
        price,
        segment,
        type_body,
        drive_type,
        engine_capacity,
        seat,
        imageUrl,
    } = req.body

    const data = await cars.find({}).toArray();
    const _id  = data.length + 1;

    const newCar = {
        _id: _id,
        brand_name: brand_name,
        type_car: type_car,
        created_year: created_year,
        price: price,
        segment: segment || "",
        type_body: type_body || "",
        drive_type: drive_type || "",
        engine_capacity: engine_capacity || "",
        seat: seat || "",
        imageUrl: imageUrl || ""
    }

    try {
        const result = await cars.insertOne(newCar);
        res.status(200).json({ result: result, data: newCar })
    } catch (error) {
        res.send(400).json({ message: error })
    }
})

module.exports = router;