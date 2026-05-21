import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-700 text-lg font-black text-white">
            C
          </div>

          <div>
            <p className="text-base font-black text-slate-900">
              Catálogo Cursos
            </p>
            <p className="text-xs font-semibold text-slate-500">
              Plataforma académica
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
          >
            Catálogo
          </Link>

          <Link
            href="/inscripciones"
            className="rounded-full bg-blue-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-800"
          >
            Inscripciones
          </Link>
        </nav>
      </div>
    </header>
  );
}