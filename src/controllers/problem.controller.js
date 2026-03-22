// Controller layer
// Controllers are responsible for handling the HTTP request and sending a response.
// They receive the request from the route layer and usually call service functions
// to perform business logic.


// This function is used to check whether the Problem Controller is working or not.
// It is usually called from a route like:  GET /api/pingProblem
// req  -> request object (data coming from client)
// res  -> response object (used to send data back to client)

function pingProblemController(req, res) {

    // res.json() sends a JSON response back to the client
    return res.json({
        message: 'problem controller is up'
    });

}


// This function will handle the creation of a new problem
// Example request:
// POST /api/problems
// Body might contain:
// {
//   "title": "Two Sum",
//   "difficulty": "Easy"
// }

function addProblem(req, res) {

    // req.body contains data sent from the client
    // This is parsed by middleware like express.json() or body-parser

    // Here we usually call a service like:
    // ProblemService.createProblem(req.body)
    return res.status(501).json({
        message:"Not Implemented"
    })


}


// This function will return a single problem
// Example:
// GET /api/problems/1
// req.params will contain the problem id

function getProblem(req, res) {

    // req.params.id would contain the problem id
    // Example:
    // const problemId = req.params.id;

    // Then we call a service to fetch data from database
    return res.status(501).json({
        message:"Not Implemented"
    })

}


// This function returns all problems
// Example:
// GET /api/problems

function getProblems(req, res) {

    // Here we normally fetch all problems from database
    // Example:
    // const problems = ProblemService.getAllProblems();
    return res.status(501).json({
        message:"Not Implemented"
    })

}


// This function deletes a problem
// Example:
// DELETE /api/problems/1

function deleteProblem(req, res) {

    // req.params.id will contain the problem id
    // Example:
    // ProblemService.deleteProblem(req.params.id)
    return res.status(501).json({
        message:"Not Implemented"
    })

}


// This function updates an existing problem
// Example:
// PUT /api/problems/1

function updateProblem(req, res) {

    // req.params.id -> which problem to update
    // req.body -> updated data

    // Example:
    // ProblemService.updateProblem(req.params.id, req.body)
    return res.status(501).json({
        message:"Not Implemented"
    })

}


// Export all controller functions
// This allows other files (like routes) to import and use them

module.exports = {

    // Function to create a problem
    addProblem,

    // Function to fetch a single problem
    getProblem,

    // Function to fetch all problems
    getProblems,

    // Function to delete a problem
    deleteProblem,

    // Function to update a problem
    updateProblem,

    // Function to check if controller is alive
    pingProblemController
}