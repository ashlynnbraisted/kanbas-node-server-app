import model from "./model.js";

export const findAllQuizzes = () => model.find();
export const findQuizzesByCourseId = (courseId) =>
  model.find({ courseId: courseId });

//WTF IDEK
export const findQuizById = (id) => model.find({ id: parseInt(id) });

export const updateQuiz = (quizId, quiz) =>
  model.updateOne({ _id: quizId }, { $set: quiz });
