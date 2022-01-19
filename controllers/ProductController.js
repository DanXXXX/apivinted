const ProductModel = require('../models/ProductModel');

/**
 * 
 * ProductControllers.js
 * 
 * @description :: Server-side logic for managing Products.
 */
module.exports = {

    list: (req, res) => {
        ProductModel.find((err, products)=>{
           if (err) {
               return res.status(500).json({
                   status: 500,
                   message: "Error when getting ProductModel"
               })
           } 
           return res.status(200).json({
               status:200,
               products: products
           })
        })
    },

    show: (req, res) =>{
        const id = req.params.id;
        ProductModel.findOne({_id: id}, (err, product)=>{
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: 'Error when getting Product.'
                })
            }
            if (!product) {
                return res.status(404).json({
                    status: 404,
                    message: 'No such Product'
                })
            }
            return res.status(200).json({
                status: 200,
                product: product
            })
        })
    },

    create: (req, res)=>{
        var Product = new ProductModel({
            ...req.body
        })

        Product.save((err, Product) =>{
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Product',
                    error: err
                })
            }
            return res.status(201).json({
                status: 201,
                message: 'Product Created'
            })
        });
    }
}