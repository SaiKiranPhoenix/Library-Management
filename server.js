const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/books", bookRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
