import * as dao from "./dao.js";
export default function QuizDetailsRoutes(app) {
  const getAllQuizzes = async (req, res) => {
    const quizzes = await dao.findAllQuizzes();
    console.log(quizzes);
    res.send(quizzes);
  };

  const getQuizzesByCourseId = async (req, res) => {
    const quizzes = await dao.findQuizzesByCourseId(req.params.cid);
    res.json(quizzes);
  };

  const getQuizByQuizId = async (req, res) => {
    console.log(req.params.id);
    const quiz = await dao.findQuizById(req.params.id);
    console.log(quiz);
    res.json(quiz);
  };

  const updateQuiz = async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateQuiz(id, req.body);
    res.json(status);
  };

  app.get("/api/quizDetails", getAllQuizzes);
  app.get("/api/quizDetails/:cid", getQuizzesByCourseId);
  app.get("/api/quizDetails/quiz/:id", getQuizByQuizId);
  app.post("/api/quizDetails/:id", updateQuiz);
}
