import mongoose from "mongoose";

const workoutSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        reps: { type: Number },
        load: { type: Number },
    },
    { timestamps: true }
);

export default mongoose.model("Workout", workoutSchema);