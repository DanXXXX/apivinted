
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController')
        //  Get home page 
router.get('/', ProductController.list);

router.get('/:id', ProductController.show);

router.post('/', ProductController.create);

router.put("/:id", ProductController.update);

module.exports = router;