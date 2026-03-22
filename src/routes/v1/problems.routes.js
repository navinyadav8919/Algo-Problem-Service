const express = require('express');
const { ProblemController } = require('../../controllers');

const problemRouter = express.Router();

// Health check route
problemRouter.get('/ping', ProblemController.pingProblemController);

// Get problem by ID
problemRouter.get('/:id', ProblemController.getProblem);

// Get all problems
problemRouter.get('/', ProblemController.getProblems);

// Create new problem
problemRouter.post('/', ProblemController.addProblem);

// Delete problem by ID
problemRouter.delete('/:id', ProblemController.deleteProblem);

// Update problem by ID
problemRouter.put('/:id', ProblemController.updateProblem);

module.exports = problemRouter;