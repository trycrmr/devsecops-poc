'use strict';
console.log('testing branch rules')
const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Hello devsecops-poc world!\n</h1>');
});

//Start
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);