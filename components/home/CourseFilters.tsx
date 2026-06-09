import Link from "next/link";
import { categories, levels } from "@/lib/courses";

type CourseFiltersProps = {
  query: string;
  selectedCategory?: string;
  selectedLevel?: string;
};

function buildFilterHref({
  query,
  category,
  level,
}: {
  query?: string;
  category?: string;
  level?: string;
}) {
  const params = new URLSearchParams();

  if (query) params.set("q", query);
  if (category) params.set("category", category);
  if (level) params.set("level", level);

  const queryString = params.toString();

  return queryString ? `/?${queryString}` : "/";
}

export default function CourseFilters({
  query,
  selectedCategory,
  selectedLevel,
}: CourseFiltersProps) {
  return (
    <aside className="lg:col-span-1">
      <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-black text-slate-900">Filtros</h2>

          <Link
            href="/"
            className="text-sm font-bold text-blue-700 hover:text-blue-900"
          >
            Limpiar
          </Link>
        </div>

        <div className="mb-8">
          <h3 className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
            Categoría
          </h3>

          <Link
            href={buildFilterHref({
              query,
              level: selectedLevel,
            })}
            className={`mb-2 block w-full rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
              !selectedCategory
                ? "bg-blue-700 text-white"
                : "bg-slate-50 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Todas
          </Link>

          {categories.map((category) => (
            <Link
              key={category}
              href={buildFilterHref({
                query,
                category,
                level: selectedLevel,
              })}
              className={`mb-2 block w-full rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                selectedCategory === category
                  ? "bg-blue-700 text-white"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {category}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
            Nivel
          </h3>

          {levels.map((level) => {
            const isSelected = selectedLevel === level.value;

            return (
              <Link
                key={level.value}
                href={buildFilterHref({
                  query,
                  category: selectedCategory,
                  level: isSelected ? undefined : level.value,
                })}
                className={`mb-2 block w-full rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                  isSelected
                    ? "bg-blue-700 text-white"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {level.label}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}