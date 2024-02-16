import { connect } from "@/dbConfig/dbConfig";
import Task from "@/models/todoModel";
import { NextResponse } from "next/server";

connect();

export async function GET() {
  try {
    const tasks = await Task.find();
    const data = tasks.map(({ _id, text, isDone }) => {
      return {
        id: _id,
        text,
        isDone,
      };
    });
    return NextResponse.json(data);
  } catch (err: any) {
    console.log(err.message);
  }
}
