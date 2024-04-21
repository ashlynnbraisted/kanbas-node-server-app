import * as dao from "./dao.js";
export default function QuestionRoutes(app) {
    const createQuestion = async (req, res) => {
        const user = await dao.createQuestion(req.body);
        res.json(user);
    };

    app.post("/api/questions", createQuestion);
}
