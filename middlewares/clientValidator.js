// Middleware function to validate client request fields
function validateClient(req, res, next) {
  const { name, lastname, email, age } = req.body;

  // Check if required fields are present
  if (!name || !lastname || !email || !age) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Additional validation logic can be added here

  next(); // Call next middleware in the chain
}

module.exports = validateClient;
