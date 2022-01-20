
const express = require('express');
const ProductController = require('../controllers/ProductController')
const productImageUpload = require('../middlewares/multer.config');
const router = express.Router();
        //  Get home page 
router.get('/', ProductController.list);

router.get('/:id', ProductController.show);

router.post('/', productImageUpload, ProductController.create);

router.put("/:id", productImageUpload, ProductController.update);

router.delete("/:id", ProductController.remove);

module.exports = router;