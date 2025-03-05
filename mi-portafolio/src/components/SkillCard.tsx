import * as React from "react";

interface SkillProps {
  name: string;
  icon: React.ReactNode;
}

export default function SkillCard({ name, icon }: SkillProps) {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <span className="text-4xl">{icon}</span>
      <p className="text-lg mt-2">{name}</p>
    </div>
  );
}
