import model from "./model.js";
export const createCourse = async (course) => {
  delete course._id;
  const createdCourse = await model.create(course);
  return createdCourse;
};
export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findById(courseId);
export const updateCourse = (courseId, course) =>  model.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });