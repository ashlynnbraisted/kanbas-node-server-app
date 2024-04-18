import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("CoursesModel", schema);
export default model;