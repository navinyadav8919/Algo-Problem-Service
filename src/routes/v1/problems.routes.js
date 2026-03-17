// Import the Express framework
// Express is used to create servers and APIs in Node.js
const express = require('express');


// Import ProblemController from the controllers folder
// '../../controllers' points to controllers/index.js
// That index file exports ProblemController
const { ProblemController } = require('../../controllers');


// Create a router object
// express.Router() allows us to create modular route handlers
// Instead of writing all routes in one file, we separate them by feature
const problemRouter = express.Router();


// Route: GET /api/v1/problems/ping
// Purpose: Check if the problem service/controller is working
// When this route is called, it triggers pingProblemController()
problemRouter.get('/ping', ProblemController.pingProblemController);


// Route: GET /api/v1/problems/:id
// :id is a dynamic parameter
// Example request:
// GET /api/v1/problems/10
// Here id = 10
// The controller function getProblem will fetch a specific problem
problemRouter.get('/:id', ProblemController.getProblem);


// Route: GET /api/v1/problems
// This will return a list of all problems
// Example request:
// GET /api/v1/problems
problemRouter.get('/', ProblemController.getProblems);


// Route: POST /api/v1/problems
// Used to create a new problem
// Data will come from request body
// Example request body:
// {
//   "title": "Two Sum",
//   "difficulty": "Easy"
// }
problemRouter.post('/', ProblemController.addProblem);


// Route: DELETE /api/v1/problems/:id
// Used to delete a specific problem
// Example:
// DELETE /api/v1/problems/5
problemRouter.delete('/:id', ProblemController.deleteProblem);


// Route: PUT /api/v1/problems/:id
// Used to update an existing problem
// Example:
// PUT /api/v1/problems/5
// Body contains updated data
problemRouter.put('/:id', ProblemController.updateProblem);


// Export the router so it can be used in the version router (v1 router)
module.exports = problemRouter;