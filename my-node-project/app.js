const express = require('express');
const app = express();
const port = 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Simple App!</h1><p>Try visiting <a href="/about">About</a> or <a href="/random">Random Number</a>.</p>');
});

// About route
app.get('/about', (req, res) => {
  res.send('<h1>About This App</h1><p>This is a simple Node.js app built with Express!</p>');
});

// Random number route
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.send(`<h1>Random Number</h1><p>Your random number is: ${randomNumber}</p>`);
});

// Start the server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
