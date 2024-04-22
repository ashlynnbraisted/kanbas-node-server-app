import mongoose from "mongoose";
const modulesSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    course: String,
    lessons: [
      {
        _id: String,
        name: String,
        description: String,
        module: String,
      },
    ],
  },
  { collection: "Modules" }
);
export default modulesSchema;
