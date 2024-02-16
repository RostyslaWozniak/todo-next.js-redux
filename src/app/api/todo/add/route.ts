import { connect } from "@/dbConfig/dbConfig";
import Task from "@/models/todoModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const { text, isDone } = await req.json();
    const newTask = await new Task({
      text,
      isDone,
    }).save();
    const task = {
      id: newTask._id,
      text: newTask.text,
      isDone: newTask.isDone,
    };
    return NextResponse.json({
      message: "Task created successfully.",
      success: true,
      data: task,
    });
  } catch (err: any) {
    console.log(err.message);
  }
}
