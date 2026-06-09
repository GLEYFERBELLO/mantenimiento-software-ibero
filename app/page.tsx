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
      <HeroSection />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <CourseSearch
          defaultQuery={query}
          selectedCategory={selectedCategory}
          selectedLevel={selectedLevel}
        />

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