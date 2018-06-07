
const ProductFile = require(__basedir + '/model/product.js');
const Product = ProductFile.Product;
const mongoose = require('mongoose');

/**
 * Récupère la liste des produits
 */
module.exports.list = (req, res, next) => {
    // Récupération des produits
    Product.find(
        (err, products) => {
            if(err) { next(err); }
            else {
                res.json(products);
            }
        }
    );
};

/**
 * Ajout un produit en BDD
 */
module.exports.add = (req, res, next) => {

    const productReceived = req.body;
    
    // Ajout d'un produit en BDD
    Product.create(
        productReceived,
        (err, productBDD) => {
            if(err) { next(err); }
            else {
                res.json(productBDD);
            }
        }
    );
    
};

/**
 * Récupération d'un produit à partir de son id
 */
module.exports.show = (req, res, next) => {
    // Récupération de l'id
    const id = req.params.id;
    if(mongoose.Types.ObjectId.isValid(id)) {
        // Récupération du produit
        Product.findOne(
            { '_id' : id },
            (err, product) => {
                if(err) { next(err); }
                else {
                    res.json(product);
                }
            }
        );
    } else {
        res.json(null);
    }   
};