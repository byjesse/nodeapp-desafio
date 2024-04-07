const pool = require("../configs/database");

// Function to get all clients from the database
async function getAllClients() {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query("SELECT * FROM clients");
    return rows;
  } catch (error) {
    console.error("Error fetching clients:", error);
    throw error;
  } finally {
    // Check if the connection is defined and not null before releasing
    if (connection && connection.release) {
      connection.release(); // Release the connection back to the pool
    }
  }
}

// Function to get a client by ID from the database
async function getClientById(id) {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query(
      "SELECT * FROM clients WHERE id = ?",
      [id]
    );
    return rows[0];
  } catch (error) {
    console.error("Error fetching client:", error);
    throw error;
  } finally {
    // Check if the connection is defined and not null before releasing
    if (connection && connection.release) {
      connection.release(); // Release the connection back to the pool
    }
  }
}

// Function to create a new client
async function createClient(name, lastname, email, age) {
  let connection;
  try {
    connection = await pool.getConnection();
    const [result] = await connection.query(
      "INSERT INTO clients (name, lastname, email, age) VALUES (?, ?, ?, ?)",
      [name, lastname, email, age]
    );
    const newClientId = result.insertId;
    return { id: newClientId, name, lastname, email, age };
  } catch (error) {
    console.error("Error saving client:", error);
    throw error;
  } finally {
    // Check if the connection is defined and not null before releasing
    if (connection && connection.release) {
      connection.release(); // Release the connection back to the pool
    }
  }
}

// Function to update a client
async function updateClient(clientId, name, lastname, email, age) {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.query(
      "UPDATE clients SET name = ?, lastname = ?, email = ?, age = ? WHERE id = ?",
      [name, lastname, email, age, clientId]
    );
    return { id: clientId, name, lastname, email, age };
  } catch (error) {
    console.error("Error updating client:", error);
    throw error;
  } finally {
    // Check if the connection is defined and not null before releasing
    if (connection && connection.release) {
      connection.release(); // Release the connection back to the pool
    }
  }
}

// Function to delete a client
async function deleteClient(clientId) {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.query("DELETE FROM clients WHERE id = ?", [clientId]);
  } catch (error) {
    console.error("Error deleting client:", error);
    throw error;
  } finally {
    // Check if the connection is defined and not null before releasing
    if (connection && connection.release) {
      connection.release(); // Release the connection back to the pool
    }
  }
}

// Other service functions for creating, updating, and deleting clients can be implemented similarly.

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  // Add other service functions here
};
