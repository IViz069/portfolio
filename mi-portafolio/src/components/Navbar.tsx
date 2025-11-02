import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gray-800 dark:bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <h1 className="text-2xl font-bold hover:text-blue-400 transition-colors">
              Kevin Koo
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition-colors">
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-400 transition-colors">
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="/skills" className="hover:text-blue-400 transition-colors">
                Habilidades
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition-colors">
                Contacto
              </Link>
            </li>
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none hover:text-blue-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <ul className="flex flex-col py-4">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-gray-800 hover:text-blue-400 transition-colors"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-gray-800 hover:text-blue-400 transition-colors"
              >
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-gray-800 hover:text-blue-400 transition-colors"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-gray-800 hover:text-blue-400 transition-colors"
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-gray-800 hover:text-blue-400 transition-colors"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
