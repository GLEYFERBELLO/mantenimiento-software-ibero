"use client";

import { useState } from "react";
import { Course } from "@/lib/courses";

export default function EnrollButton({ course }: { course: Course }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleEnroll = async () => {
    try {
      setLoading(true);
      setMessage("");

      const response = await fetch("/api/enrollments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId: course.id,
          courseTitle: course.title,
          studentName: "Estudiante invitado",
          studentEmail: "invitado@demo.com",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "No se pudo realizar la inscripción");
      }

      setMessage("Inscripción realizada correctamente.");
    } catch (error) {
      setMessage("Ocurrió un error al inscribirte.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={handleEnroll}
        disabled={loading}
        className="w-full rounded-xl bg-white py-4 text-lg font-bold text-blue-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Procesando inscripción..." : "Inscribirse al curso"}
      </button>

      {message && (
        <p className="mt-3 rounded-xl bg-white/15 px-4 py-3 text-center text-sm font-semibold text-white">
          {message}
        </p>
      )}
    </div>
  );
}