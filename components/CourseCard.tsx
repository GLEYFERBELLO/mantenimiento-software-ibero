'use client';

import { Course } from '@/lib/courses';
import Link from 'next/link';
import Image from 'next/image';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer h-full">
        {/* Image Container */}
        <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.src = 'https://via.placeholder.com/500x300?text=Curso';
            }}
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category Badge */}
          <div className="flex gap-2 mb-2">
            <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {course.category}
            </span>
            <span className="text-xs font-semibold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
              {course.level}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600">
            {course.title}
          </h3>

          {/* Instructor */}
          <p className="text-sm text-gray-600 mb-3">Por {course.instructor}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < Math.floor(course.rating) ? '★' : '☆'}</span>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {course.rating} ({course.students.toLocaleString()} estudiantes)
            </span>
          </div>

          {/* Duration */}
          <p className="text-xs text-gray-500 mb-4">⏱️ {course.duration}</p>

          {/* Price */}
          <div className="border-t pt-3">
            <p className="text-2xl font-bold text-blue-600">${course.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
