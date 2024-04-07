const productService = require("../services/productService");

// Controller function to handle GET /products
async function getAllProducts(req, res) {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Controller function to handle GET /products/:id
async function getProductById(req, res) {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Function to create a new product
async function createProduct(req, res) {
  try {
    const { name, description, price } = req.body;
    const newProduct = await productService.createProduct(name, description, price);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Function to update a product
async function updateProduct(req, res) {
  try {
    const productId = req.params.id;
    const { name, description, price } = req.body;
    const updatedProduct = await productService.updateProduct(productId, name, description, price);
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Function to delete a product
async function deleteProduct(req, res) {
  try {
    const productId = req.params.id;
    await productService.deleteProduct(productId);
    res.status(204).end(); // No content in response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Other controller functions for handling POST, PUT, and DELETE endpoints can be implemented similarly.

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  // Add other controller functions here
};
