import * as dao from "./dao.js";
export default function QuestionRoutes(app) {
    const createQuestion = async (req, res) => {
        const user = await dao.createQuestion(req.body);
        res.json(user);
    };
    const findAllQuestionsByQuizId = async (req, res) => {
        const questions = await dao.findAllQuestionsByQuizId(req.params.quizId);
        res.json(questions);
    };

    const findQuestionById = async (req, res) => {
        console.log('id', req.params.questionId);
        const question = await dao.findQuestionById(req.params.questionId);
        console.log('question', question);
        res.json(question);
    };

    const updateQuestion = async (req, res) => {
        const { questionId } = req.params;
        const status = await dao.updateQuestion(questionId, req.body);
        const currentQuestion = await dao.findQuestionById(questionId);
        res.json(status);
      };

    app.post("/api/questions", createQuestion);
    app.get("/api/questions/:quizId", findAllQuestionsByQuizId);
    app.get("/api/questions/id/:questionId", findQuestionById);
    app.put("/api/questions/:questionId", updateQuestion);


}
     