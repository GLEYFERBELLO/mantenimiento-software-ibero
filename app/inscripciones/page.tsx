import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import EnrollmentModel from "@/models/EnrollmentModel";

export const dynamic = "force-dynamic";

type EnrollmentItem = {
  _id: string;
  courseId: string;
  courseTitle: string;
  studentName: string;
  studentEmail: string;
  status: "pending" | "confirmed";
  createdAt: string;
};

type EnrollmentRaw = {
  _id: { toString(): string };
  courseId: string;
  courseTitle: string;
  studentName: string;
  studentEmail: string;
  status: "pending" | "confirmed";
  createdAt: Date;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-CO", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}

export default async function InscripcionesPage() {
  await connectDB();

  const enrollmentsRaw = await EnrollmentModel.find()
    .sort({ createdAt: -1 })
    .lean<EnrollmentRaw[]>();

  const enrollments: EnrollmentItem[] = enrollmentsRaw.map((item) => ({
    _id: item._id.toString(),
    courseId: item.courseId,
    courseTitle: item.courseTitle,
    studentName: item.studentName,
    studentEmail: item.studentEmail,
    status: item.status,
    createdAt: item.createdAt.toISOString(),
  }));

  const total = enrollments.length;
  const confirmed = enrollments.filter(
    (item) => item.status === "confirmed"
  ).length;
  const pending = enrollments.filter(
    (item) => item.status === "pending"
  ).length;

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <Link
            href="/"
            className="mb-6 inline-block text-sm font-bold text-blue-300 hover:text-blue-200"
          >
            ← Volver al catálogo
          </Link>

          <h1 className="text-4xl font-black">Inscripciones realizadas</h1>

          <p className="mt-3 max-w-2xl text-slate-300">
            Aquí puedes ver los estudiantes inscritos a los cursos. Esta
            información viene directamente desde MongoDB Atlas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Total
            </p>
            <p className="mt-2 text-4xl font-black text-slate-900">{total}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Confirmadas
            </p>
            <p className="mt-2 text-4xl font-black text-green-600">
              {confirmed}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Pendientes
            </p>
            <p className="mt-2 text-4xl font-black text-yellow-600">
              {pending}
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 px-6 py-5 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-black text-slate-900">
                Listado de inscritos
              </h2>
              <p className="text-sm text-slate-500">
                Registros guardados en la colección de inscripciones.
              </p>
            </div>

            <Link
              href="/inscripciones"
              className="rounded-2xl bg-blue-700 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-800"
            >
              Actualizar
            </Link>
          </div>

          {enrollments.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-lg font-bold text-slate-800">
                Todavía no hay inscripciones.
              </p>
              <p className="mt-2 text-slate-500">
                Cuando alguien se inscriba a un curso aparecerá aquí.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-sm font-black text-slate-700">
                      Curso
                    </th>
                    <th className="px-6 py-4 text-sm font-black text-slate-700">
                      Estudiante
                    </th>
                    <th className="px-6 py-4 text-sm font-black text-slate-700">
                      Email
                    </th>
                    <th className="px-6 py-4 text-sm font-black text-slate-700">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-sm font-black text-slate-700">
                      Fecha
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {enrollments.map((item) => (
                    <tr
                      key={item._id}
                      className="border-t border-slate-100 transition hover:bg-slate-50"
                    >
                      <td className="px-6 py-4">
                        <p className="font-bold text-slate-900">
                          {item.courseTitle}
                        </p>
                        <p className="text-xs text-slate-500">
                          ID curso: {item.courseId}
                        </p>
                      </td>

                      <td className="px-6 py-4 text-sm font-semibold text-slate-700">
                        {item.studentName}
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600">
                        {item.studentEmail}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-black ${
                            item.status === "confirmed"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.status === "confirmed"
                            ? "Confirmada"
                            : "Pendiente"}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600">
                        {formatDate(item.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}