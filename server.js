const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log("New Contact:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.json({ message: "Message received successfully!" });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});