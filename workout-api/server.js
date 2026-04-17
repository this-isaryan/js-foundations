import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import workoutRoutes from "./routes/workoutRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/api/workouts", workoutRoutes);

app.listen(5000, () => console.log('server running'));