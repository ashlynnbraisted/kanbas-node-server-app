import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("QuizDetails", schema);
export default model;
