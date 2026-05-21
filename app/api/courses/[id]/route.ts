import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import CourseModel from "@/models/CourseModel";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(_request: Request, { params }: Params) {
  try {
    await connectDB();

    const { id } = await params;
    const course = await CourseModel.findById(id);

    if (!course) {
      return NextResponse.json(
        {
          ok: false,
          message: "Curso no encontrado",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ok: true,
      course,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Error al consultar el curso",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();

    const course = await CourseModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!course) {
      return NextResponse.json(
        {
          ok: false,
          message: "Curso no encontrado",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ok: true,
      course,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Error al actualizar el curso",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  try {
    await connectDB();

    const { id } = await params;
    const course = await CourseModel.findByIdAndDelete(id);

    if (!course) {
      return NextResponse.json(
        {
          ok: false,
          message: "Curso no encontrado",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Curso eliminado correctamente",
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "Error al eliminar el curso",
      },
      { status: 500 }
    );
  }
}