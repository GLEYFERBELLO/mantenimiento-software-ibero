'use client';

import { courses } from '@/lib/courses';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function CoursePage() {
  const params = useParams();
  const courseId = params.id as string;
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Curso no encontrado</h1>
            <Link href="/" className="text-blue-600 hover:underline text-lg">
              ← Volver al catálogo
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Back Button */}
      <div className="bg-white shadow-sm py-4">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Volver al catálogo
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = 'https://via.placeholder.com/500x400?text=Curso';
                }}
              />
            </div>

            {/* Info */}
            <div>
              <div className="flex gap-2 mb-4">
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {course.category}
                </span>
                <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {course.level}
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>

              <p className="text-lg opacity-90 mb-6">{course.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👨‍🏫</span>
                  <span>Por: <strong>{course.instructor}</strong></span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-2xl">⏱️</span>
                  <span>Duración: <strong>{course.duration}</strong></span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-2xl">👥</span>
                  <span>Estudiantes: <strong>{course.students.toLocaleString()}</strong></span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">★★★★★</span>
                  <span>
                    Calificación: <strong>{course.rating}</strong>
                  </span>
                </div>
              </div>

              <div className="text-4xl font-bold mb-6">${course.price}</div>

              <button className="w-full bg-white text-blue-600 font-bold py-4 rounded-lg hover:bg-gray-100 transition text-lg">
                Inscribirse al curso
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* What you'll learn */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Qué aprenderás?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Conceptos fundamentales del área de estudio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Técnicas y herramientas profesionales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Proyectos prácticos y casos reales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Mejores prácticas de la industria</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-xl">✓</span>
                  <span className="text-gray-700">Certificado de finalización</span>
                </li>
              </ul>
            </div>

            {/* Course Content */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contenido del Curso</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((section) => (
                  <div key={section} className="border-l-4 border-blue-600 pl-4 py-2">
                    <h3 className="font-bold text-gray-800">Sección {section}</h3>
                    <p className="text-gray-600 text-sm">
                      {section === 1
                        ? 'Introducción y configuración inicial'
                        : section === 2
                          ? 'Conceptos clave y teoría'
                          : section === 3
                            ? 'Proyectos prácticos'
                            : 'Proyecto final y conclusiones'}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">3-4 lecciones • {3 + section} minutos</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Requisitos</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Computadora con conexión a internet</li>
                <li>• Software necesario (se proporciona en el curso)</li>
                <li>• Disposición para aprender y practicar</li>
                <li>• Dedicar tiempo a los proyectos prácticos</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-bold text-gray-800 mb-4">Información del Curso</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">Categoría</p>
                  <p className="font-semibold text-gray-800">{course.category}</p>
                </div>
                <div>
                  <p className="text-gray-600">Nivel</p>
                  <p className="font-semibold text-gray-800">{course.level}</p>
                </div>
                <div>
                  <p className="text-gray-600">Duración Total</p>
                  <p className="font-semibold text-gray-800">{course.duration}</p>
                </div>
                <div>
                  <p className="text-gray-600">Instructor</p>
                  <p className="font-semibold text-gray-800">{course.instructor}</p>
                </div>
                <div>
                  <p className="text-gray-600">Calificación</p>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-gray-800 mb-4">Reseñas de Estudiantes</h3>
              <div className="space-y-4">
                {[1, 2].map((review) => (
                  <div key={review} className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                        👤
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Estudiante {review}</p>
                        <p className="text-yellow-400 text-sm">★★★★★</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Excelente curso, muy bien explicado y con muchos ejercicios prácticos.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
