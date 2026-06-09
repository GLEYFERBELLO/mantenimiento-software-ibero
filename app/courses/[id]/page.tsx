import Link from "next/link";
import Image from "next/image";
import { courses } from "@/lib/courses";
import EnrollButton from "@/components/EnrollButton";

type CoursePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = courses.find((item) => item.id === id);

  if (!course) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800">
              Curso no encontrado
            </h1>

            <Link href="/" className="text-lg text-blue-600 hover:underline">
              ← Volver al catálogo
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const formattedStudents = new Intl.NumberFormat("es-CO").format(
    course.students
  );

  const formattedPrice = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(course.price);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white py-4 shadow-sm">
        <div className="mx-auto max-w-6xl px-4">
          <Link
            href="/"
            className="font-semibold text-blue-600 hover:text-blue-800"
          >
            ← Volver al catálogo
          </Link>
        </div>
      </div>

      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-8 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="relative h-96 overflow-hidden rounded-lg shadow-xl">
              <Image
                src={course.image}
                alt={course.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white">
                  {course.category}
                </span>

                <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white">
                  {course.levelLabel}
                </span>
              </div>

              <h1 className="mb-4 text-4xl font-bold">{course.title}</h1>

              <p className="mb-6 text-lg opacity-90">{course.description}</p>

              <div className="mb-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👨‍🏫</span>
                  <span>
                    Por: <strong>{course.instructor}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-2xl">⏱️</span>
                  <span>
                    Duración: <strong>{course.duration}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-2xl">👥</span>
                  <span>
                    Estudiantes: <strong>{formattedStudents}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">★★★★★</span>
                  <span>
                    Calificación: <strong>{course.rating}</strong>
                  </span>
                </div>
              </div>

              <div className="mb-6 text-4xl font-bold">{formattedPrice}</div>

              <EnrollButton course={course} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="mb-8 rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                ¿Qué aprenderás?
              </h2>

              <ul className="space-y-3">
                {[
                  "Conceptos fundamentales del área de estudio",
                  "Técnicas y herramientas profesionales",
                  "Proyectos prácticos y casos reales",
                  "Mejores prácticas de la industria",
                  "Certificado de finalización",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-xl font-bold text-green-500">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8 rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Contenido del curso
              </h2>

              <div className="space-y-4">
                {[
                  "Introducción y configuración inicial",
                  "Conceptos clave y teoría",
                  "Proyectos prácticos",
                  "Proyecto final y conclusiones",
                ].map((section, index) => (
                  <div
                    key={section}
                    className="border-l-4 border-blue-600 py-2 pl-4"
                  >
                    <h3 className="font-bold text-gray-800">
                      Sección {index + 1}
                    </h3>

                    <p className="text-sm text-gray-600">{section}</p>

                    <p className="mt-1 text-xs text-gray-500">
                      3-4 lecciones • {4 + index} minutos
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Requisitos
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>• Computadora con conexión a internet</li>
                <li>• Software necesario proporcionado en el curso</li>
                <li>• Disposición para aprender y practicar</li>
                <li>• Dedicar tiempo a los proyectos prácticos</li>
              </ul>
            </div>
          </div>

          <aside>
            <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 font-bold text-gray-800">
                Información del curso
              </h3>

              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">Categoría</p>
                  <p className="font-semibold text-gray-800">
                    {course.category}
                  </p>
                </div>

                <div>
                  <p className="text-gray-600">Nivel</p>
                  <p className="font-semibold text-gray-800">
                    {course.levelLabel}
                  </p>
                </div>

                <div>
                  <p className="text-gray-600">Duración total</p>
                  <p className="font-semibold text-gray-800">
                    {course.duration}
                  </p>
                </div>

                <div>
                  <p className="text-gray-600">Instructor</p>
                  <p className="font-semibold text-gray-800">
                    {course.instructor}
                  </p>
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

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 font-bold text-gray-800">
                Reseñas de estudiantes
              </h3>

              <div className="space-y-4">
                {[1, 2].map((review) => (
                  <div key={review} className="border-b pb-4 last:border-b-0">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-200">
                        👤
                      </div>

                      <div>
                        <p className="font-semibold text-gray-800">
                          Estudiante {review}
                        </p>
                        <p className="text-sm text-yellow-400">★★★★★</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700">
                      Excelente curso, muy bien explicado y con muchos
                      ejercicios prácticos.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}