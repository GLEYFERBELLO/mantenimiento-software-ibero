import { courses } from "@/lib/courses";
import type { CourseLevel } from "@/lib/types/course";
import HeroSection from "@/components/home/HeroSection";
import CourseSearch from "@/components/home/CourseSearch";
import CourseFilters from "@/components/home/CourseFilters";
import CourseResults from "@/components/home/CourseResults";

type HomeSearchParams = {
  q?: string;
  category?: string;
  level?: string;
};

type HomeProps = {
  searchParams?: Promise<HomeSearchParams>;
};

const validLevels: CourseLevel[] = ["Beginner", "Intermediate", "Advanced"];

function normalizeParam(value?: string) {
  return value?.trim() || "";
}

function isValidLevel(value: string): value is CourseLevel {
  return validLevels.includes(value as CourseLevel);
}

export default async function Home({ searchParams }: HomeProps) {
  const params = searchParams ? await searchParams : {};

  const query = normalizeParam(params.q);
  const selectedCategory = normalizeParam(params.category);
  const levelParam = normalizeParam(params.level);
  const selectedLevel = isValidLevel(levelParam) ? levelParam : "";

  const normalizedQuery = query.toLowerCase();

  const filteredCourses = courses.filter((course) => {
    const matchCategory =
      !selectedCategory || course.category === selectedCategory;

    const matchLevel = !selectedLevel || course.level === selectedLevel;

    const matchSearch =
      !normalizedQuery ||
      course.title.toLowerCase().includes(normalizedQuery) ||
      course.description.toLowerCase().includes(normalizedQuery) ||
      course.category.toLowerCase().includes(normalizedQuery) ||
      course.instructor.toLowerCase().includes(normalizedQuery);

    return matchCategory && matchLevel && matchSearch;
  });

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

        {/* Section search bar */}
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
          <CourseFilters
            query={query}
            selectedCategory={selectedCategory}
            selectedLevel={selectedLevel}
          />

          <CourseResults courses={filteredCourses} />
        </div>
      </section>
    </main>
  );
}
