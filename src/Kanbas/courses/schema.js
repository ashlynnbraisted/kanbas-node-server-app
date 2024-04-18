import mongoose from "mongoose";
const coursesSchema = new mongoose.Schema(
  {
    name: String,
    number: String,
    startDate: String,
    endDate: String,
    department: String,
    credits: Number,
    color: String,
    description: String,
  },
  { collection: "courses" }
);
export default coursesSchema;