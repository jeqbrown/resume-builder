const router = require('express').Router();
const Car = require('../model/Car');

router.post('/add', async (req, res) => {
    const car = new Car({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        color: req.body.color
    });
    console.log(car);
    try{
        const savedCar = await car.save();
        res.send(savedCar);
    }
    catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;