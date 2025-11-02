import * as React from "react";
import PageTransition from "../components/PageTransition";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <PageTransition>
      <section className="p-10 text-white bg-gray-800 min-h-screen flex items-center justify-center">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl font-bold text-center mb-8 text-blue-400"
            variants={itemVariants}
          >
            Sobre Mí
          </motion.h1>

          <motion.div
            className="bg-gray-900 rounded-lg p-8 shadow-xl border border-gray-700"
            variants={itemVariants}
          >
            <motion.p className="text-xl text-gray-300 leading-relaxed mb-6" variants={itemVariants}>
              Soy un <span className="text-blue-400 font-semibold">desarrollador backend</span> especializado en
              <span className="text-green-400 font-semibold"> Java y Spring Boot</span>, con experiencia en el
              sector bancario y la creación de APIs eficientes y escalables.
            </motion.p>

            <motion.p className="text-lg text-gray-400 leading-relaxed mb-6" variants={itemVariants}>
              Mi experiencia incluye el desarrollo de soluciones robustas para sistemas financieros,
              implementación de microservicios, y trabajo con tecnologías cloud como AWS y Docker.
            </motion.p>

            <motion.div className="grid md:grid-cols-2 gap-6 mt-8" variants={itemVariants}>
              <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Experiencia</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Desarrollo de APIs RESTful</li>
                  <li>• Arquitectura de microservicios</li>
                  <li>• Integración con bases de datos</li>
                  <li>• Despliegue en cloud (AWS)</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-green-500/30">
                <h3 className="text-xl font-bold text-green-400 mb-3">Enfoque</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Código limpio y mantenible</li>
                  <li>• Mejores prácticas de desarrollo</li>
                  <li>• Seguridad y escalabilidad</li>
                  <li>• Aprendizaje continuo</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
