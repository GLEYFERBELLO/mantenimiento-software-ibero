"use client";

import { useMemo, useState } from "react";
import { courses, categories } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

const levels = [
  { value: "Beginner", label: "🌱 Principiante" },
  { value: "Intermediate", label: "📈 Intermedio" },
  { value: "Advanced", label: "🚀 Avanzado" },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return courses.filter((course) => {
      const matchCategory = !selectedCategory || course.category === selectedCategory;
      const matchLevel = !selectedLevel || course.level === selectedLevel;

      const matchSearch =
        !query ||
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query);

      return matchCategory && matchLevel && matchSearch;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedLevel(null);
    setSearchQuery("");
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed,transparent_30%)] opacity-70" />

        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
            Plataforma de aprendizaje online
          </span>

          <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
            Catálogo de cursos para aprender tecnología de forma práctica
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Explora cursos de frontend, backend, diseño, datos y DevOps con una
            interfaz sencilla, moderna y lista para conectar con MongoDB Atlas.
          </p>

          <div className="mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-3xl font-black">{courses.length}</p>
              <p className="text-sm text-slate-300">Cursos con disponibilidad</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-3xl font-black">{categories.length}</p>
              <p className="text-sm text-slate-300">Categorías</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-3xl font-black">4.8</p>
              <p className="text-sm text-slate-300">Promedio general</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <input
            type="text"
            placeholder="Buscar por curso, categoría o instructor..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <div className="sticky top-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-black text-slate-900">Filtros</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm font-bold text-blue-700 hover:text-blue-900"
                >
                  Limpiar
                </button>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                  Categoría
                </h3>

                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`mb-2 block w-full rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                    selectedCategory === null
                      ? "bg-blue-700 text-white"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  Todas
                </button>

                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`mb-2 block w-full rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                      selectedCategory === category
                        ? "bg-blue-700 text-white"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div>
                <h3 className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                  Nivel
                </h3>

                {levels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() =>
                      setSelectedLevel(selectedLevel === level.value ? null : level.value)
                    }
                    className={`mb-2 block w-full rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                      selectedLevel === level.value
                        ? "bg-blue-700 text-white"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                  Resultados
                </p>
                <h2 className="text-2xl font-black text-slate-900">
                  {filteredCourses.length} curso
                  {filteredCourses.length !== 1 ? "s" : ""} encontrado
                  {filteredCourses.length !== 1 ? "s" : ""}
                </h2>
              </div>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {filteredCourses.map((course) => (
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
                <button
                  onClick={clearFilters}
                  className="mt-6 rounded-2xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}