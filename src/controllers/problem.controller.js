// Controller layer

const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');
const BadRequest = require('../errors/badrequest.error');

// Health check controller
function pingProblemController(req, res) {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: 'problem controller is up'
    });
}

// Create a new problem
function addProblem(req, res,next) {
   try {
     throw new NotImplemented("Add Problem");
   } catch (error) {
        next(error);
   }
}

// Get a single problem by ID
function getProblem(req, res,next) {
   try {
     throw new NotImplemented("Add Problem");
   } catch (error) {
        next(error);
   }
}

// Get all problems
function getProblems(req, res,next) {
    try {
     throw new NotImplemented("Add Problem");
   } catch (error) {
        next(error);
   }
}

// Delete a problem by ID
function deleteProblem(req, res,next) {
    try {
     throw new NotImplemented("Add Problem");
   } catch (error) {
        next(error);
   }
}

// Update a problem by ID
function updateProblem(req, res,next) {
    try {
     throw new NotImplemented("Add Problem");
   } catch (error) {
        next(error);
   }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
};