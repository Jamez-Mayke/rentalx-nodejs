import express from "express";
import { createCourse } from "./routes";

const app = express();
app.use(express.json());

app.get("/", createCourse);

app.listen(8080, () => console.log("Server Active!"));
