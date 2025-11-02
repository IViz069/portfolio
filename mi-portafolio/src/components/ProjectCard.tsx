import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectProps {
  title: string;
  description: string;
  repoLink: string;
  technologies?: string[];
  image?: string | null;
}

export default function ProjectCard({
  title,
  description,
  repoLink,
  technologies = [],
  image
}: ProjectProps) {
  return (
    <motion.div
      className="bg-gray-800 text-white shadow-xl rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
      whileHover={{ scale: 1.03, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {image && (
        <div className="h-48 bg-gray-700 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3 text-blue-400">{title}</h2>
        <p className="text-gray-300 mb-4 min-h-[60px]">{description}</p>

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaGithub className="text-xl" />
            Ver en GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
  