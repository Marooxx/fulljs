// Les imports
const express = require('express');
const router = express.Router();
const productController = require(__basedir + '/controllers/product-controller');

/**
 * Préfixes des routes : "/api/products"
 */
router.route('/')
    // Liste de produits
    .get(productController.list)
    // Ajout d'un produit
    .post(productController.add)
;

// Détail d'un produit
router.get('/:id', productController.show);

module.exports = router;