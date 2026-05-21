"use client";

import { Course } from "@/lib/courses";
import Link from "next/link";
import Image from "next/image";

const formatStudents = (value: number) => {
  return new Intl.NumberFormat("es-CO").format(value);
};

const formatPrice = (value: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(value);
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`} className="group block h-full">
      <article className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="relative h-52 w-full overflow-hidden bg-slate-200">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            priority={course.id === "1"}
          />

          <div className="absolute left-4 top-4 flex gap-2">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 backdrop-blur">
              {course.category}
            </span>
            <span className="rounded-full bg-blue-600/90 px-3 py-1 text-xs font-bold text-white backdrop-blur">
              {course.levelLabel}
            </span>
          </div>
        </div>

        <div className="flex h-[calc(100%-13rem)] flex-col p-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Curso online
          </p>

          <h3 className="mb-2 line-clamp-2 text-xl font-black text-slate-900 transition group-hover:text-blue-700">
            {course.title}
          </h3>

          <p className="mb-4 line-clamp-2 text-sm leading-6 text-slate-600">
            {course.description}
          </p>

          <div className="mb-4 flex items-center gap-2 text-sm text-slate-600">
            <span className="text-yellow-500">★★★★★</span>
            <span>
              <strong>{course.rating}</strong> ({formatStudents(course.students)} estudiantes)
            </span>
          </div>

          <div className="mb-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-slate-50 p-3">
              <p className="text-slate-500">Duración</p>
              <p className="font-bold text-slate-900">{course.duration}</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-3">
              <p className="text-slate-500">Instructor</p>
              <p className="truncate font-bold text-slate-900">{course.instructor}</p>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
            <p className="text-2xl font-black text-blue-700">
              {formatPrice(course.price)}
            </p>

            <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white transition group-hover:bg-blue-700">
              Ver curso
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}