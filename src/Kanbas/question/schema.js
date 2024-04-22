import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    title: String,
    quizId: Number,
    questionType: {
        type: String,
        enum: ["Multiple Choice", "True/False", "Fill in the Blank"],
        default: "Multiple Choice",
    },
    title: {
        type: String,
        required: true,
        default: "Question Title", 
    },
    points: Number,
    question: {
        type: String,
        required: true,
        default: "Enter Question Text Here",
    },
    answer: { 
        type: Array,
        required: true,
    },
    options: {
        type: Array,
        default: [],
    },
  },
  { collection: "Questions" }
);

export default questionSchema;