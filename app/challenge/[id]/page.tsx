"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Project {
  title: string;
  techstack: string[];
  description: string;
}

const ChallengePage: React.FC = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || Array.isArray(id)) return;

    const fetchProject = async () => {
      try {
        const response = await fetch("/data/data.json");
        const data: Project[] = await response.json();
        const selectedProject = data[parseInt(id) - 1];
        setProject(selectedProject || null);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex items-center relative w-full min-h-screen p-4 bg-gray-50">
      <div className="flex flex-col md:flex-row border max-w-[1200px] mx-auto w-full border-gray-200 rounded-2xl px-2 py-4 bg-white">
        <div className="flex flex-1 order-1 md:order-2">
          <span>images</span>
        </div>
        <div className="flex flex-1 flex-col order-2 md:order-1">
          <h1 className="text-3xl font-bold mb-5">{project.title}</h1>
          <p>{project.description}</p>
          <strong>Tech Stack:</strong> {project.techstack.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;
