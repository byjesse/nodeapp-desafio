const clientService = require("../services/clientService");

// Controller function to handle GET /clients
async function getAllClients(req, res) {
  try {
    const clients = await clientService.getAllClients();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Controller function to handle GET /clients/:id
async function getClientById(req, res) {
  try {
    const { id } = req.params;
    const client = await clientService.getClientById(id);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Function to create a new client
async function createClient(req, res) {
  try {
    const { name, lastname, email, age } = req.body;
    const newClient = await clientService.createClient(
      name,
      lastname,
      email,
      age
    );
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Function to update a client
async function updateClient(req, res) {
  try {
    const clientId = req.params.id;
    const { name, lastname, email, age } = req.body;
    const updatedClient = await clientService.updateClient(
      clientId,
      name,
      lastname,
      email,
      age
    );
    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Function to delete a client
async function deleteClient(req, res) {
  try {
    const clientId = req.params.id;
    await clientService.deleteClient(clientId);
    res.status(204).end(); // No content in response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Other controller functions for handling POST, PUT, and DELETE endpoints can be implemented similarly.

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
  // Add other controller functions here
};
