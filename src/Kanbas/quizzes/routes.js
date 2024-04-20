import * as dao from "./dao.js";
export default function QuizDetailsRoutes(app) {
  const getAllQuizzes = async (req, res) => {
    const quizzes = await dao.findAllQuizzes();
    console.log(quizzes);
    res.send(quizzes);
  };

  app.get("/api/quizDetails", getAllQuizzes);
}
