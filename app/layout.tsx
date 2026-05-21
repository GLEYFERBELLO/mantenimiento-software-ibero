import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Catálogo de Cursos Online",
  description:
    "Aprende nuevas habilidades con cursos de Frontend, Backend, Data Science y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 font-sans text-slate-950">
        <Header />

        {children}

        <footer className="mt-12 bg-slate-950 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <h3 className="mb-4 text-lg font-bold">Sobre Nosotros</h3>
                <p className="text-sm text-slate-400">
                  Somos una plataforma dedicada a proporcionar educación de
                  calidad en tecnología.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-bold">Enlaces Rápidos</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                  
                    <Link href="/" className="hover:text-white">
                      Inicio
                    </Link>
           
                  </li>
                  <li>
                    <Link href="/inscripciones" className="hover:text-white">
                      Inscripciones
                    </Link>
                  </li>
                  <li>
                    <Link href="/contacto" className="hover:text-white">
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link href="/politica-de-privacidad" className="hover:text-white">
                      Política de privacidad
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-bold">Contáctanos</h3>
                <p className="text-sm text-slate-400">
                  Email: info@cursos.com
                </p>
                <p className="text-sm text-slate-400">
                  Teléfono: +57 300 000 0000
                </p>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
              <p>
                &copy; 2024 Catálogo de Cursos. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}