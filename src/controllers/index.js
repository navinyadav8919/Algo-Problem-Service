// In Node.js every file is treated as a module.
// module.exports is used to export variables, functions, or objects
// so that other files can import and use them using require().

module.exports = {

    // ProblemController is the name of the property being exported.
    // require('./problem.controller') loads the file named problem.controller.js
    // which is located in the same folder (./ means current directory).

    // This means:
    // 1. Load the problem.controller.js file
    // 2. Store everything exported from that file
    // 3. Attach it to the name "ProblemController"

    ProblemController: require('./problem.controller')

    // After exporting, other files can import it like this:

    // const { ProblemController } = require('../controllers');

    // Now ProblemController will contain all the functions defined
    // inside problem.controller.js (like createProblem, deleteProblem, etc.)

}