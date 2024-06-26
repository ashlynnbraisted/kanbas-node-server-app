import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import UserRoutes from "./src/Kanbas/Users/routes.js";
import ModuleRoutes from "./src/Kanbas/modules/routes.js";
import CourseRoutes from "./src/Kanbas/courses/routes.js";
import QuizDetailsRoutes from "./src/Kanbas/quizzes/routes.js";
import QuestionRoutes from "./src/Kanbas/question/routes.js";
import Lab5 from "./Lab5.js";
import Hello from "./Hello.js";
import cors from "cors";
const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    // domain: process.env.HTTP_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
QuizDetailsRoutes(app);
QuestionRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);
