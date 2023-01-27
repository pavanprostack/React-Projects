require("dotenv").config({ path: "config/config.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const morgan = require('morgan')

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});
