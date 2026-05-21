import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import CourseModel from "@/models/CourseModel";

export async function GET() {
  try {
    await connectDB();

    const courses = await CourseModel.find().sort({ createdAt: -1 });

    return NextResponse.json({
      ok: true,
      courses,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Error al consultar los cursos",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const course = await CourseModel.create(body);

    return NextResponse.json(
      {
        ok: true,
        course,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Error al crear el curso",
      },
      { status: 500 }
    );
  }
}