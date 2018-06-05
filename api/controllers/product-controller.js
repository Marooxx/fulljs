
const ProductFile = require(__basedir + '/model/product.js');
const Product = ProductFile.Product;

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
    // Ajout d'un produit en BDD
    Product.create(
        {
            name: 'Transat',
            introduction: 'Idéal pour se reposer après une semaine de Full-JavaScript',
            price: 5.99,
            createdAt: new Date(),
            publisher: 'Billy'
        },
        (err, product) => {
            if(err) { next(err); }
            else {
                res.json(product);
            }
        }
    );
};