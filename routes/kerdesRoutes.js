const express = require('express');
const {
    deleteKerdes,
    getKerdes,
    postKerdes,
} = require('../controllers/kerdesRouteControllers');
const router = express.Router();

router.delete('/torol/:id', deleteKerdes);
router.get('/modosit/:id', getKerdes);
router.post('/modosit', postKerdes);

module.exports = router;
