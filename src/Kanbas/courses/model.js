import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("Courses", schema);
export default model;
