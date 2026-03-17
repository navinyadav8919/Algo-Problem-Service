// Import the Express library
// Express is a framework in Node.js used to create servers and APIs
const express = require('express');


// Import the problems router
// This router will contain all routes related to problems
// Example routes inside it might be:
// POST /problems
// GET /problems
// DELETE /problems/:id
const problemRouter = require('./problems.routes');


// Create a new router instance
// express.Router() helps us create modular and grouped routes
// Instead of defining all routes in one file, we divide them into smaller routers
const v1Router = express.Router();


// Mount the problemRouter on the path '/problems'
// This means any request starting with /problems will be handled by problemRouter

// Example mappings:

// /problems  → handled by problems.routes.js
// /problems/1 → handled by problems.routes.js

v1Router.use('/problems', problemRouter);


// Export this router so it can be used in higher-level routing files
// Example usage:
// app.use('/api/v1', v1Router);

module.exports = v1Router;