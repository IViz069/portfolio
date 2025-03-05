import * as React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Kevin Koo</h1>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-gray-300">Inicio</Link></li>
        <li><Link to="/about" className="hover:text-gray-300">Sobre Mí</Link></li>
        <li><Link to="/projects" className="hover:text-gray-300">Proyectos</Link></li>
        <li><Link to="/skills" className="hover:text-gray-300">Habilidades</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300">Contacto</Link></li>
      </ul>
    </nav>
  );
}
