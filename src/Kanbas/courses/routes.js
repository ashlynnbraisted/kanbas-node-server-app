import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };

  const findCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params.id);
    res.json(course);
  };

  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };

  const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const course = await dao.updateCourse(courseId, req.body);
    res.json(course);
  };

  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.id);
    res.json(status);
  };

  app.get("/api/courses", findAllCourses);
  app.get("/api/courses/:id", findCourseById);
  app.post("/api/courses", createCourse);
  app.put("/api/courses/:id", updateCourse);
  app.delete("/api/courses/:id", deleteCourse);
}