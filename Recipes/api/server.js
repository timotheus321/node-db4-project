// server.js
const express = require('express');
const recipesRouter = require('../recipes/recipes-router'); // Adjusted path to go up one level and then into recipes directory

const server = express();

server.use(express.json());

server.use('/api/recipes', recipesRouter);

module.exports = server;
