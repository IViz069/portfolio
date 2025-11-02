import * as React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter, FaJava, FaReact, FaDocker, FaAws, FaDownload } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import PageTransition from "../components/PageTransition";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <PageTransition>
      <motion.section
        className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      {/* 🔹 Imagen de perfil */}
      <img
        src="https://github.com/IViz069.png" // Reemplaza con tu imagen si quieres
        alt="Perfil de Kevin Koo"
        className="w-40 h-40 rounded-full shadow-lg border-4 border-gray-700"
      />

      {/* 🔹 Animación de Escritura */}
      <h1 className="text-5xl font-bold mt-6">
        ¡Hola! Soy{" "}
        <span className="text-blue-400">
          <Typewriter
            words={["Kevin Koo", "Desarrollador Backend", "Java | Spring Boot"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <p className="text-lg mt-2">Especializado en desarrollo backend y soluciones escalables.</p>

      {/* 🔹 Íconos de Redes Sociales */}
      <div className="mt-6 flex space-x-4">
        <a href="https://github.com/IViz069" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-4xl hover:text-gray-400 transition" />
        </a>
        <a href="https://linkedin.com/in/kevin-koo" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-4xl hover:text-blue-400 transition" />
        </a>
        <a href="https://twitter.com/TU_USUARIO" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-4xl hover:text-blue-300 transition" />
        </a>
      </div>

      {/* 🔹 Tecnologías */}
      <h2 className="text-2xl font-bold mt-8">Tecnologías que uso</h2>
      <div className="mt-4 flex space-x-6">
        <SiSpring className="text-5xl text-green-500" />
        <FaJava className="text-5xl text-yellow-500" />
        <FaReact className="text-5xl text-blue-400" />
        <FaDocker className="text-5xl text-blue-300" />
        <FaAws className="text-5xl text-orange-400" />
      </div>

      {/* 🔹 Botones de Acción */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link
          to="/contact"
          className="px-8 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
        >
          Contáctame
        </Link>

        <a
          href="/cv-kevin-koo.pdf"
          download
          className="px-8 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
        >
          <FaDownload />
          Descargar CV
        </a>
      </div>
      </motion.section>
    </PageTransition>
  );
}
