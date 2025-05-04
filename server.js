const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = 3000;

// Connect DB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
