var express = require('express');
var router = express.Router();
var reportesController = require('../controllers/reportesController.js');

/*
 * GET
 */
router.get('/', reportesController.list);

/*
 * GET
 */
router.get('/:id', reportesController.show);

/*
 * POST
 */
router.post('/', reportesController.create);

/*
 * PUT
 */
router.put('/:id', reportesController.update);

/*
 * DELETE
 */
router.delete('/:id', reportesController.remove);

module.exports = router;
