export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  levelLabel: "Principiante" | "Intermedio" | "Avanzado";
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Diseño Web Moderno con React",
    description:
      "Aprende a crear interfaces modernas, responsivas y profesionales usando React, componentes reutilizables y Tailwind CSS.",
    category: "Frontend",
    price: 49.99,
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=900",
    instructor: "Carlos Méndez",
    rating: 4.8,
    students: 2145,
    duration: "8 horas",
    level: "Intermediate",
    levelLabel: "Intermedio",
  },
  {
    id: "2",
    title: "Backend con Node.js y Express",
    description:
      "Construye APIs REST, maneja rutas, controladores, validaciones y conexión con bases de datos.",
    category: "Backend",
    price: 59.99,
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=900",
    instructor: "Juan Martínez",
    rating: 4.7,
    students: 1856,
    duration: "12 horas",
    level: "Intermediate",
    levelLabel: "Intermedio",
  },
  {
    id: "3",
    title: "Python para Ciencia de Datos",
    description:
      "Aprende análisis de datos, limpieza de información, visualización y conceptos iniciales de machine learning.",
    category: "Data Science",
    price: 69.99,
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=900",
    instructor: "Ana Rodríguez",
    rating: 4.9,
    students: 3421,
    duration: "15 horas",
    level: "Advanced",
    levelLabel: "Avanzado",
  },
  {
    id: "4",
    title: "Fundamentos de JavaScript",
    description:
      "Domina variables, funciones, arreglos, objetos, DOM, eventos y lógica base para desarrollo web.",
    category: "Frontend",
    price: 39.99,
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=900",
    instructor: "Miguel López",
    rating: 4.6,
    students: 5234,
    duration: "10 horas",
    level: "Beginner",
    levelLabel: "Principiante",
  },
  {
    id: "5",
    title: "DevOps y Docker",
    description:
      "Aprende contenedores, imágenes, volúmenes, redes, despliegue y conceptos base de automatización.",
    category: "DevOps",
    price: 79.99,
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=900",
    instructor: "Sofía García",
    rating: 4.8,
    students: 1234,
    duration: "14 horas",
    level: "Advanced",
    levelLabel: "Avanzado",
  },
  {
    id: "6",
    title: "TypeScript Avanzado",
    description:
      "Profundiza en tipos avanzados, genéricos, utilidades, buenas prácticas y arquitectura frontend.",
    category: "Frontend",
    price: 54.99,
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=900",
    instructor: "Pablo Moreno",
    rating: 4.7,
    students: 987,
    duration: "9 horas",
    level: "Advanced",
    levelLabel: "Avanzado",
  },
  {
    id: "7",
    title: "UI/UX Design desde Cero",
    description:
      "Aprende principios visuales, wireframes, experiencia de usuario, prototipos y diseño con Figma.",
    category: "Design",
    price: 44.99,
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=900",
    instructor: "Laura Fernández",
    rating: 4.9,
    students: 2876,
    duration: "11 horas",
    level: "Beginner",
    levelLabel: "Principiante",
  },
  {
    id: "8",
    title: "SQL y Bases de Datos Relacionales",
    description:
      "Diseña tablas, relaciones, consultas, filtros, joins y aprende bases sólidas para proyectos reales.",
    category: "Backend",
    price: 49.99,
    image:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=900",
    instructor: "Roberto Silva",
    rating: 4.6,
    students: 1543,
    duration: "10 horas",
    level: "Intermediate",
    levelLabel: "Intermedio",
  },
];

export const categories = Array.from(new Set(courses.map((course) => course.category)));