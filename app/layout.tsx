import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catálogo de Cursos Online",
  description: "Aprende nuevas habilidades con nuestros cursos de alta calidad en Frontend, Backend, Data Science y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <footer className="bg-gray-900 text-white mt-12">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Sobre Nosotros</h3>
                <p className="text-gray-400 text-sm">
                  Somos una plataforma dedicada a proporcionar educación de calidad en tecnología.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white">Inicio</a></li>
                  <li><a href="#" className="hover:text-white">Contacto</a></li>
                  <li><a href="#" className="hover:text-white">Política de privacidad</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contáctanos</h3>
                <p className="text-gray-400 text-sm">Email: info@cursos.com</p>
                <p className="text-gray-400 text-sm">Teléfono: +57 300 000 0000</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 Catálogo de Cursos. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
