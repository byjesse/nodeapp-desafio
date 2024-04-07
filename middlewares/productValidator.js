// Middleware function to validate product request fields
function validateProduct(req, res, next) {
  const { name, description, price } = req.body;

  // Check if required fields are present
  if (!name || !description || !price) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Additional validation logic can be added here

  next(); // Call next middleware in the chain
}

module.exports = validateProduct;
