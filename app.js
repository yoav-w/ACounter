const express = require('express');
const app = express();

// Counter variable
let hitCounter = 0;

// Middleware to increment counter on each request
app.use((req, res, next) => {
  hitCounter++;
  next();
});

// Route handling for GET requests
app.get('/', (req, res) => {
  res.send(`Hello! This page has been visited ${hitCounter} times.`);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});