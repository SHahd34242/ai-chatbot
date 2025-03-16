// app.js
const express = require("express");
const app = express();
const port = 3000;

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static("public"));

// Route to send a default response
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Example API to simulate chatbot response
app.get("/chat", (req, res) => {
  const userMessage = req.query.message;
  let botResponse = "I'm not sure how to respond to that.";

  if (userMessage) {
    botResponse = "You said: " + userMessage;
  }

  res.send({ message: botResponse });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
