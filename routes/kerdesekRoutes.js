const express = require('express');
const {
    getKerdesek,
    getSzuroKerdesek,
} = require('../controllers/kerdesekRouteControllers');
const router = express.Router();

router.get('/', getKerdesek);
router.get('/:tipus', getSzuroKerdesek);

module.exports = router;
