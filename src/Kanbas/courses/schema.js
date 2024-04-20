import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    number: String,
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
  },
  { collection: "Courses" }
);
export default courseSchema;
