const express = require('express');
const router = express.Router();

const depotOnwerCtrl = require('../controllers/depotOnwer');

router.post('/',depotOnwerCtrl.create);
//router.delete('/:id',depotOnwerCtrl.delete);
//router.put('/:id',depotOnwerCtrl.update);
//router.get('/',depotOnwerCtrl.getAll);
//router.get('/:id',depotOnwerCtrl.getOne);

module.exports = router;