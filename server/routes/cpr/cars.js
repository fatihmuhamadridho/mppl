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

router.get('/:id', async(req, res) => {
    const cars = config.getDbCPR().collection("cars");
    try {
        const data = await cars.findOne({ _id: Number(req.params.id) });
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
        dataset,
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
        imageUrl: imageUrl || "",
        dataset: dataset.map((data, index) => {
            return {
                id_dataset: index + 1,
                id_car: _id,
                created_year: data.created_year,
                price: data.price
            }
        }) || []
    }

    try {
        const result = await cars.insertOne(newCar);
        res.status(200).json({ result: result, data: newCar })
    } catch (error) {
        res.send(400).json({ message: error })
    }
})

module.exports = router;