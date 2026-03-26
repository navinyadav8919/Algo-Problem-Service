// Controller layer

const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');
const BadRequest = require('../errors/badrequest.error');
const {ProblemService}= require('../services');
const { ProblemRepository }= require('../repositories')


const problemService = new ProblemService( new ProblemRepository());

// Health check controller
function pingProblemController(req, res) {
    return res.status(StatusCodes.OK).json({
        success: true,
        message: 'problem controller is up'
    });
}

// Create a new problem
async function addProblem(req, res,next) {
   try {
     console.log('incomeing body request',req.body);
      const newproblem =await problemService.createProblem(req.body);
      return res.status(StatusCodes.CREATED).json({
          success:true,
          message: 'Successfully created a new problem',
          error: {},
          data: newproblem
      })
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
async function getProblems(req, res,next) {
    try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
            success:true,
          message: 'Successfully fetched all the problems',
          error: {},
          data: response
    })
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