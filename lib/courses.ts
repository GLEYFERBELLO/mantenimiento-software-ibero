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
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Diseño Web Moderno con React',
    description: 'Aprende a crear interfaces modernas y responsivas usando React y Tailwind CSS.',
    category: 'Frontend',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    instructor: 'Carlos Mendez',
    rating: 4.8,
    students: 2145,
    duration: '8 horas',
    level: 'Intermediate',
  },
  {
    id: '2',
    title: 'Backend con Node.js y Express',
    description: 'Domina el desarrollo backend con Node.js, Express y bases de datos SQL.',
    category: 'Backend',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    instructor: 'Juan Martinez',
    rating: 4.7,
    students: 1856,
    duration: '12 horas',
    level: 'Intermediate',
  },
  {
    id: '3',
    title: 'Python para Ciencia de Datos',
    description: 'Análisis de datos, visualización y machine learning con Python.',
    category: 'Data Science',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8e49e?w=500&h=300&fit=crop',
    instructor: 'Ana Rodriguez',
    rating: 4.9,
    students: 3421,
    duration: '15 horas',
    level: 'Advanced',
  },
  {
    id: '4',
    title: 'Fundamentos de JavaScript',
    description: 'Los conceptos clave de JavaScript desde cero. Perfecto para principiantes.',
    category: 'Frontend',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db3a?w=500&h=300&fit=crop',
    instructor: 'Miguel López',
    rating: 4.6,
    students: 5234,
    duration: '10 horas',
    level: 'Beginner',
  },
  {
    id: '5',
    title: 'DevOps y Docker',
    description: 'Containerización, orquestación y deployment con Docker y Kubernetes.',
    category: 'DevOps',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop',
    instructor: 'Sofia Garcia',
    rating: 4.8,
    students: 1234,
    duration: '14 horas',
    level: 'Advanced',
  },
  {
    id: '6',
    title: 'TypeScript Avanzado',
    description: 'Domina TypeScript: tipos avanzados, generics, decoradores y más.',
    category: 'Frontend',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    instructor: 'Pablo Moreno',
    rating: 4.7,
    students: 987,
    duration: '9 horas',
    level: 'Advanced',
  },
  {
    id: '7',
    title: 'UI/UX Design desde Cero',
    description: 'Aprende los principios de diseño, wireframing y prototipado con Figma.',
    category: 'Design',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    instructor: 'Laura Fernandez',
    rating: 4.9,
    students: 2876,
    duration: '11 horas',
    level: 'Beginner',
  },
  {
    id: '8',
    title: 'SQL y Bases de Datos Relacionales',
    description: 'Diseño, consultas y optimización de bases de datos SQL.',
    category: 'Backend',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=300&fit=crop',
    instructor: 'Roberto Silva',
    rating: 4.6,
    students: 1543,
    duration: '10 horas',
    level: 'Intermediate',
  },
];

export const categories = Array.from(new Set(courses.map(c => c.category)));
