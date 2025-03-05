interface ProjectProps {
    title: string;
    description: string;
    repoLink: string;
  }
  
  export default function ProjectCard({ title, description, repoLink }: ProjectProps) {
    return (
      <div className="bg-white text-gray-900 shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Ver en GitHub
        </a>
      </div>
    );
  }
  