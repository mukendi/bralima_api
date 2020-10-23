const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product');
const auth        = require('../middleware/auth');

router.post('/',auth, productCtrl.add);
router.get('/',productCtrl.getAll);
router.get('/:id',productCtrl.getOne);
router.put('/:id',auth, productCtrl.update);
router.delete('/:id',auth, productCtrl.delete);

module.exports = router;