const { markdownSanitizer } = require('../utils');

class ProblemService{

    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }
    
    async createProblem(problemData){
       try {
             //1.sanitize the markdown for description
        problemData.description = markdownSanitizer(problemData.description);
        
        // console.log('problem data',problemData);
        const problem = await this.problemRepository.createProblem(problemData);

        // console.log("problem created",problem);
        return problem;

       } catch (error) {
            console.log(error);
            throw error;
        
       }
    }

    async getAllProblems(){
        try {
            const problems =await this.problemRepository.getAllProblems();
            return problems;
        } catch (error) {
            consoel.log(error);
            throw error;
            
        }

    }

    async getProblem(problemID){
        const problem = await this.problemRepository.getProblem(problemID);
        return problem;
    }
}

module.exports=ProblemService;