const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const clientsRouter = require("./routes/clients");
const productsRouter = require("./routes/products");
const indexRouter = require("./routes/index");
const basicAuth = require("./middlewares/basicAuthentication");

app.use(express.json());

// Mounting routes
app.use("/", basicAuth, indexRouter);
app.use("/clients", basicAuth, clientsRouter);
app.use("/products", basicAuth, productsRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
