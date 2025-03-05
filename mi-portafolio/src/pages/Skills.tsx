import * as React from "react";
import { FaJava, FaReact, FaDocker, FaAws, FaBitbucket, FaPython, FaDev} from "react-icons/fa";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <FaReact /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Bitbucket", icon: <FaBitbucket /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C++", icon: <FaDev /> },
  ];

  return (
    <section className="p-10 bg-gray-800 text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Habilidades Técnicas</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}
