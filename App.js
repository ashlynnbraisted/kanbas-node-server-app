import express from 'express';
import ModuleRoutes from './routes/ModuleRoutes.js';
import CourseRoutes from './routes/CourseRoutes.js';
import Lab5 from './routes/Lab5.js';
import Hello from './routes/Hello.js';
import cors from "cors";
const app = express()
app.use(cors());
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app)
app.listen(process.env.PORT || 4000)