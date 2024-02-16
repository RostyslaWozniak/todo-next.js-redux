import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please enter your task."],
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.models.tasks || mongoose.model("tasks", todoSchema);

export default Task;
