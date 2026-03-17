// Import Express framework
const express = require('express');


// Import version 1 router
// This router contains all APIs belonging to version 1
const v1Router = require('./v1');


// Create main API router
// This router will handle all API requests
const apiRouter = express.Router();


// Mount the v1Router on '/v1'
// Any request starting with /api/v1 will go to v1Router

// Example:
// /api/v1/problems
// /api/v1/problems/1

apiRouter.use('/v1', v1Router);


// Export apiRouter so it can be used in the main server file
module.exports = apiRouter;