var express = require('express');
var router = express.Router();
var ReporteController = require('../controllers/ReporteController.js');

/*
 * GET
 */
router.get('/', ReporteController.list);

/*
 * GET
 */
router.get('/:id', ReporteController.show);

/*
 * POST
 */
router.post('/', ReporteController.create);

/*
 * PUT
 */
router.put('/:id', ReporteController.update);

/*
 * DELETE
 */
router.delete('/:id', ReporteController.remove);

module.exports = router;
