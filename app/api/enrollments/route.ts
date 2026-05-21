import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import EnrollmentModel from "@/models/EnrollmentModel";

export async function GET() {
  try {
    await connectDB();

    const enrollments = await EnrollmentModel.find().sort({ createdAt: -1 });

    return NextResponse.json({
      ok: true,
      enrollments,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Error al consultar las inscripciones",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    if (!body.courseId || !body.courseTitle) {
      return NextResponse.json(
        {
          ok: false,
          message: "Faltan datos del curso",
        },
        { status: 400 }
      );
    }

    const enrollment = await EnrollmentModel.create({
      courseId: body.courseId,
      courseTitle: body.courseTitle,
      studentName: body.studentName || "Estudiante invitado",
      studentEmail: body.studentEmail || "invitado@demo.com",
      status: "confirmed",
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Inscripción realizada correctamente",
        enrollment,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Error al crear la inscripción",
      },
      { status: 500 }
    );
  }
}