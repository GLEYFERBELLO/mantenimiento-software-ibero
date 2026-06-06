import { categories, courses } from "@/lib/courses";

function getAverageRating() {
  if (courses.length === 0) return "0.0";

  const total = courses.reduce((acc, course) => acc + course.rating, 0);
  return (total / courses.length).toFixed(1);
}

export default function HeroSection() {
  return (
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
          interfaz sencilla, moderna y preparada para evolucionar.
        </p>

        <div className="mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            <p className="text-3xl font-black">{courses.length}</p>
            <p className="text-sm text-slate-300">Cursos disponibles</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            <p className="text-3xl font-black">{categories.length}</p>
            <p className="text-sm text-slate-300">Categorías</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
            <p className="text-3xl font-black">{getAverageRating()}</p>
            <p className="text-sm text-slate-300">Promedio general</p>
          </div>
        </div>
      </div>
    </section>
  );
}