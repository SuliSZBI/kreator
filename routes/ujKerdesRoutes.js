const express = require('express');
const {
    getUjKerdes,
    postUjKerdes,
} = require('../controllers/ujKerdesRouteControllers');
const router = express.Router();

router.get('/', getUjKerdes);
router.post('/', postUjKerdes);

module.exports = router;
