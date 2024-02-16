import { connect } from "@/dbConfig/dbConfig";
import Task from "@/models/todoModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: Request) {
  try {
    const { id } = await req.json();
    await Task.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Task deleted successfully.",
      id,
    });
  } catch (err: any) {
    console.log(err.message);
  }
}
