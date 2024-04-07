const express = require("express");
const router = express.Router();
const clientsController = require("../controllers/clientsController");
const validateClient = require("../middlewares/clientValidator");

// GET /clients
router.get("/", clientsController.getAllClients);

// GET /clients/:id
router.get("/:id", clientsController.getClientById);

// POST /clients
router.post("/", validateClient, clientsController.createClient);

// PUT /clients/:id
router.put("/:id", validateClient, clientsController.updateClient);

// DELETE /clients/:id
router.delete("/:id", clientsController.deleteClient);

module.exports = router;
