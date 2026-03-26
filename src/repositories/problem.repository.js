const { Problem } = require('../models');

class ProblemRepository {
    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: problemData.testCases ? problemData.testCases : []
            });

            return problem;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async getAllProblems(){
        try{
            const problems = await Problem.find({});
            return problems;
        } catch(error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemRepository;