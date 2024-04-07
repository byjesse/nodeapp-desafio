function basicAuth(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");

  // Example: Check if username and password match expected values
  if (username === "admin" && password === "password") {
    next(); // User is authenticated, proceed to next middleware or route handler
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = basicAuth;
