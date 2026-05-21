'use client';

import { useState, useMemo } from 'react';
import { courses, categories } from '@/lib/courses';
import CourseCard from '@/components/CourseCard';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar cursos
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchCategory = !selectedCategory || course.category === selectedCategory;
      const matchLevel = !selectedLevel || course.level === selectedLevel;
      const matchSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchLevel && matchSearch;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Catálogo de Cursos</h1>
          <p className="text-lg md:text-xl opacity-90">
            Aprende nuevas habilidades con nuestros cursos de alta calidad
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar cursos por nombre o descripción..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-lg font-bold text-gray-800 mb-6">Filtros</h2>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">
                  Categoría
                </h3>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`block w-full text-left px-4 py-2 rounded mb-2 transition ${
                    selectedCategory === null
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-100 text-gray-800'
                  }`}
                >
                  Todas
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-4 py-2 rounded mb-2 transition ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100 text-gray-800'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Level Filter */}
              <div>
                <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide">
                  Nivel
                </h3>
                {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                    className={`block w-full text-left px-4 py-2 rounded mb-2 transition ${
                      selectedLevel === level
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100 text-gray-800'
                    }`}
                  >
                    {level === 'Beginner'
                      ? '🌱 Principiante'
                      : level === 'Intermediate'
                        ? '📈 Intermedio'
                        : '🚀 Avanzado'}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Courses Grid */}
          <div className="lg:col-span-3">
            {filteredCourses.length > 0 ? (
              <>
                <div className="mb-6">
                  <p className="text-gray-600 font-semibold">
                    {filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''} encontrado
                    {filteredCourses.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-gray-600 text-lg">
                  No se encontraron cursos que coincidan con tu búsqueda.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedLevel(null);
                    setSearchQuery('');
                  }}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
