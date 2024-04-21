import mongoose from "mongoose";

const quizDetailsSchema = new mongoose.Schema(
  {
    title: String,
    courseId: String,
    quizType: {
      type: String,
      enum: [
        "Graded Quiz",
        "Practice Quiz",
        "Graded Survey",
        "Ungraded Survey",
      ],
      default: "Graded Quiz",
    },
    points: Number,
    assignmentGroup: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes",
    },
    shuffleAnswers: {
      type: String,
      enum: ["Yes", "No"],
      default: "Yes",
    },
    timeLimit: {
      type: Number,
      default: 20,
    },
    multipleAttempts: {
      type: String,
      enum: ["No", "Yes"],
      default: "No",
    },
    showCorrectAnswers: {
      type: String,
      enum: ["Immediately", "After all attempts are submitted", "Never"],
      default: "After all attempts are submitted",
    },
    accessCode: {
      type: String,
      default: "",
    },
    oneQuestionAtATime: {
      type: String,
      enum: ["Yes", "No"],
      default: "Yes",
    },
    webcamRequired: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    lockQuestionsAfterAnswering: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    numberQuestions: Number,
    published: Boolean,
  },
  { collection: "QuizDetails" }
);

export default quizDetailsSchema;
