import { connect } from "@/dbConfig/dbConfig";
import Task from "@/models/todoModel";
import { NextResponse } from "next/server";

connect();

export async function POST(req: Request) {
  try {
    const { id } = await req.json();
    const task = await Task.findById(id);
    task.isDone = !task.isDone;
    task.save();
    return NextResponse.json({
      message: "Task updated successfully.",
      id,
    });
  } catch (err: any) {
    console.log(err.message);
  }
}
