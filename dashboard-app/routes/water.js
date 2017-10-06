var express = require('express');
var router = express.Router();
var mongodb_water = require('../mongodb-water-communicator');

/* GET users listing. */
router.get('/', function(req, res, next) {
    mongodb_water.geWaterConsumtionDataForLastHour()
    res.render('water', { title: 'Express' });
});

module.exports = router;
