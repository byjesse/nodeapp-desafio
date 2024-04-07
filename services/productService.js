const pool = require("../configs/database");

// Function to get all products from the database
async function getAllProducts() {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query("SELECT * FROM products");
    return rows;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  } finally {
    // Check if the connection is defined and not null before releasing
    if (connection && connection.release) {
      connection.release(); // Release the connection back to the pool
    }
  }
}

// Function to get a product by ID from the database
async function getProductById(id) {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query(
      "SELECT * FROM products WHERE id = ?",
      [id]
    );
    return rows[0];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  } finally {
    // Check if the connection is defined and not null before releasing
    if (connection && connection.release) {
      connection.release(); // Release the connection back to the pool
    }
  }
}

// Function to create a new product
async function createProduct(name, description, price) {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.query(
      "INSERT INTO products (name, description, price) VALUES (?, ?, ?)",
      [name, description, price]
    );
    const newProductId = result.insertId;
    return { id: newProductId, name, description, price };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  } finally {
    // Check if the connection is defined and not null before releasing
    if (connection && connection.release) {
      connection.release(); // Release the connection back to the pool
    }
  }
}

// Function to update a product
async function updateProduct(productId, name, description, price) {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.query(
      "UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?",
      [name, description, price, productId]
    );
    return { id: productId, name, description, price };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  } finally {
    // Check if the connection is defined and not null before releasing
    if (connection && connection.release) {
      connection.release(); // Release the connection back to the pool
    }
  }
}

// Function to delete a product
async function deleteProduct(productId) {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.query("DELETE FROM products WHERE id = ?", [productId]);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  } finally {
    // Check if the connection is defined and not null before releasing
    if (connection && connection.release) {
      connection.release(); // Release the connection back to the pool
    }
  }
}

// Other service functions for creating, updating, and deleting products can be implemented similarly.

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  // Add other service functions here
};
