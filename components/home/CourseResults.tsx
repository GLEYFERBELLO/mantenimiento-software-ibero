import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import type { Course } from "@/lib/types/course";

type CourseResultsProps = {
  courses: Course[];
};

export default function CourseResults({ courses }: CourseResultsProps) {
  return (
    <section className="lg:col-span-3">
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Resultados
          </p>

          <h2 className="text-2xl font-black text-slate-900">
            {courses.length} curso{courses.length !== 1 ? "s" : ""} encontrado
            {courses.length !== 1 ? "s" : ""}
          </h2>
        </div>
      </div>

      {courses.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
          <p className="text-lg font-bold text-slate-800">
            No se encontraron cursos.
          </p>

          <p className="mt-2 text-slate-500">
            Prueba con otra búsqueda o limpia los filtros.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-2xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
          >
            Limpiar filtros
          </Link>
        </div>
      )}
    </section>
  );
}