const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

// For teaching/demo purposes.
// Later, you can explain that production apps usually restrict CORS.
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mood Check API is running!");
});

app.get("/api/mood", (req, res) => {
  res.json({
    message: "Your API is working!",
    mood: "Ready to deploy",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});