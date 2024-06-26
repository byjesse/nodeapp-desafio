const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const validateProduct = require("../middlewares/productValidator");

// GET /products
router.get("/", productsController.getAllProducts);

// GET /products/:id
router.get("/:id", productsController.getProductById);

// POST /products
router.post("/", validateProduct, productsController.createProduct);

// PUT /products/:id
router.put("/:id", validateProduct, productsController.updateProduct);

// DELETE /products/:id
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
