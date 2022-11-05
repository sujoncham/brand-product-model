const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brand.controllers')

router.route("/bulk-update").patch(brandController.bulkUpdateBrand);
router.route("/bulk-delete").delete(brandController.bulkDeleteBrand);

router.route('/')
.get(brandController.getBrand)
.post(brandController.createBrand);

router.route('/:id')
.get(brandController.getBrandById)
.patch(brandController.updateBrandId)
.delete(brandController.deleteByIdBrand);


module.exports = router;