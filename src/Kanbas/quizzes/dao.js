import model from "./model.js";

export const createQuiz = (quiz) => {
  delete quiz._id;
  return model.create(quiz);
};

export const findAllQuizzes = () => model.find();
export const findQuizzesByCourseId = (courseId) =>
  model.find({ courseId: courseId });

//WTF IDEK
export const findQuizById = (id) => model.find({ id: parseInt(id) });

export const updateQuiz = (quizId, quiz) =>
  model.updateOne({ _id: quizId }, { $set: quiz });

export const deleteQuiz = (quiz_id) => model.deleteOne({ _id: quiz_id });

export const updatePublish = (quizId, val) =>
  model.updateOne({ _id: quizId }, { $set: { published: val } });

export const updateNumberQuestions = (quiz_Id, val) =>
  model.updateOne({ _id: quiz_Id }, { $set: { numberQuestions: val } });
