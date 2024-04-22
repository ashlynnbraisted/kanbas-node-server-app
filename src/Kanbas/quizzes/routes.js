import * as dao from "./dao.js";
export default function QuizDetailsRoutes(app) {
  const getAllQuizzes = async (req, res) => {
    const quizzes = await dao.findAllQuizzes();
    res.send(quizzes);
  };

  const getQuizzesByCourseId = async (req, res) => {
    const quizzes = await dao.findQuizzesByCourseId(req.params.cid);
    res.json(quizzes);
  };

  const getQuizByQuizId = async (req, res) => {
    const quiz = await dao.findQuizById(req.params.id);
    res.json(quiz);
  };

  const updateQuiz = async (req, res) => {
    const { id } = req.params;
    const status = await dao.updateQuiz(id, req.body);
    res.json(status);
  };

  const removeQuiz = async (req, res) => {
    const status = await dao.deleteQuiz(req.params.id);
    res.json(status);
  };

  const publishQuiz = async (req, res) => {
    const status = await dao.updatePublish(req.params.id, true);
    res.json(status);
  };

  const unpublishQuiz = async (req, res) => {
    const status = await dao.updatePublish(req.params.id, false);
    res.json(status);
  };

  const addQuiz = async (req, res) => {
    const quizzes = await dao.findAllQuizzes();

    const biggest = Math.max(...quizzes.map((quiz) => quiz.id)) + 1;

    const newQuiz = {
      title: "New Quiz",
      id: biggest + 1,
      description: "New Quiz Description",
      courseId: req.params.cid,
      quizType: "Graded Quiz",
      points: 20,
      assignmentGroup: "Quizzes",
      shuffleAnswers: "Yes",
      timeLimit: 20,
      multipleAttempts: "No",
      showCorrectAnswers: "After all attempts are submitted",
      accessCode: "",
      oneQuestionAtATime: "Yes",
      webcamRequired: "No",
      lockQuestionsAfterAnswering: "No",
      dueDate: "2024-12-31",
      availableDate: "2024-12-31",
      untilDate: "2024-12-31",
      numberQuestions: 0,
      published: false,
    };
    const result = await dao.createQuiz(newQuiz);
    res.json(result);
  };

  app.get("/api/quizDetails", getAllQuizzes);
  app.get("/api/quizDetails/:cid", getQuizzesByCourseId);
  app.get("/api/quizDetails/quiz/:id", getQuizByQuizId);
  app.post("/api/quizDetails/:id", updateQuiz);
  app.post("/api/quizDetails/:id/publish", publishQuiz);
  app.post("/api/quizDetails/:id/unpublish", unpublishQuiz);
  app.delete("/api/quizDetails/:id", removeQuiz);
  app.post("/api/quizDetails/:cid/create", addQuiz);
}