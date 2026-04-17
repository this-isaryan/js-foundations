import Workout from "../models/Workout.js";

export const createWorkout = async (req, res) => {
    try {
        const workout = await Workout.create(req.body);
        res.status(201).json(Workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getWorkouts = async (req, res) => {
    const workouts = await Workout.find();
    res.json(workouts);
};