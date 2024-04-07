# Node.js REST API

This is a simple Node.js REST API that performs CRUD operations for managing clients and products.

## Installation

1. Clone the repository:

   git clone https://github.com/your-username/node-rest-api.git

2. Install dependencies:

   npm install

3. Start the server:

   npm start

The server will start running on port 3000 by default.
You can access the API endpoints using a tool like Postman or by sending HTTP requests from your preferred client.

## Endpoints

GET /clients: Get all clients.

GET /clients/:id: Get a client by ID.

POST /clients: Create a new client.

PUT /clients/:id: Update an existing client.

DELETE /clients/:id: Delete a client.

GET /products: Get all products.

GET /products/:id: Get a product by ID.

POST /products: Create a new product.

PUT /products/:id: Update an existing product.

DELETE /products/:id: Delete a product.

## Environment Variables

DB_HOST: Hostname of the MySQL database.

DB_USER: Username for connecting to the MySQL database.

DB_PASSWORD: Password for connecting to the MySQL database.

DB_DATABASE: Name of the MySQL database.

Before starting the application, ensure you have set up a MySQL database and provided the correct environment variables in a .env file.

## License

This project is licensed under the MIT License.
