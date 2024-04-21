import * as dao from "./dao.js";
export default function QuestionRoutes(app) {
    const createQuestion = async (req, res) => {
        const user = await dao.createQuestion(req.body);
        res.json(user);
    };
    const findAllQuestionsByQuizId = async (req, res) => {
        const questions = await dao.findAllQuestionsByQuizId(req.params.quizId);
        console.log(questions);
        res.json(questions);
    };

    app.post("/api/questions", createQuestion);
    app.get("/api/questions/:quizId", findAllQuestionsByQuizId);

}
